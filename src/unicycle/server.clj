(ns unicycle.server
  (:refer-clojure :exclude [+ - * /])
  (:require [common.math :refer [π τ dt] :as a]
            [common.web :as web]
            [unicycle.core :as u]
            [clojure.core.async :as async :refer [>!! <!! close! thread]]
            [org.httpkit.server :as server]
            [compojure.core :refer [defroutes GET POST]]
            [compojure.route :as route]
            [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :as http-kit]
            [ring.middleware.defaults :as defaults]
            [ring.middleware.reload :as reload]
            [ring.middleware.cors :as cors]
            [ring.util.response :as response]
            [figwheel-sidecar.repl-api :as ra]
            [clojure.data.json :as json])
  (:use [clojure.core.matrix.operators :only [+ - * /]])
  (:gen-class))

(def base-cycle
  {:id nil
   :position [0.0 0.0 1.0] :yaw 0.0
   :kρ 0.5 :kϕ 1.0 :ϵ 10
   :wheels [:uni 0.2] :engine (* a/π [1.0 10.0])})

(def init-data
  {:cycles/by-id {}})

(defonce world
  (ref init-data))

(defn next-uid [{{uid :client-id} :params}]
  (str (gensym)))

(declare channel-socket)

(defn start-websocket []
  (defonce channel-socket
    (sente/make-channel-socket! (http-kit/get-sch-adapter)
      {:user-id-fn #'next-uid})))

;matlab
(defonce channels (atom #{}))

(defn connect! [channel]
  (println "matlab channel open")
  (swap! channels conj channel))

(defn disconnect! [channel status]
  (println "matlab channel close")
  (swap! channels #(remove #{channel} %)))

(defn matlab-handler [request]
  (server/with-channel request channel
                       (connect! channel)
                       (server/on-close channel #(disconnect! channel %))))

;routes
(defroutes routes
  (GET "/ws" req (response/content-type
                   (matlab-handler req)
                   "application/json"))
  (GET "/" req (response/content-type
                 (response/resource-response "public/index.html")
                 "text/html"))
  (GET "/status" req (str "Running: " (pr-str @(:connected-uids channel-socket))))
  (GET "/chsk" req ((:ajax-get-or-ws-handshake-fn channel-socket) req))
  (POST "/chsk" req ((:ajax-post-fn channel-socket) req))
  (route/resources "/")
  (route/not-found "Not found"))

(def handler
  (-> #'routes
      reload/wrap-reload
      (defaults/wrap-defaults
        (assoc-in defaults/site-defaults
                  [:security :anti-forgery]
                  false))
      (cors/wrap-cors :access-control-allow-origin [#".*"]
                      :access-control-allow-methods [:get :put :post :delete]
                      :access-control-allow-credentials ["true"])))

;sente events
(defmulti event :id)

(defmethod event :default [{:keys [event]}]
  (println "Unhandled event: " event))

(defmethod event :chsk/uidport-open [{:keys [uid client-id]}]
  (println "New connection:" uid client-id)
  (dosync (alter world update :cycles/by-id assoc uid
                 (assoc base-cycle :id uid))))

(defmethod event :cycle/name [{:keys [uid ?data]}]
  (println "Username:" ?data)
  (dosync (alter world assoc-in [:cycles/by-id uid :name] ?data)))

(defmethod event :cycle/target [{:keys [uid ?data]}]
  (dosync (alter world assoc-in [:cycles/by-id uid :target]
                 (assoc ?data :id (keyword uid "target")))))

(defmethod event :chsk/uidport-close [{:keys [uid]}]
  (println "Disconnected:" uid)
  (dosync (alter world update :cycles/by-id dissoc uid)))

(defmethod event :chsk/ws-ping [_])

(defn start-router []
  (defonce router
    (sente/start-chsk-router! (:ch-recv channel-socket) event)))

(defn broadcast []
  (doseq [uid (:any @(:connected-uids channel-socket))]
    ((:send-fn channel-socket) uid [:cycle/update (:cycles/by-id @world)]))
  (doseq [channel @channels]
    (server/send! channel [(json/write-str (:cycles/by-id @world))])))

;server
(defn start-game []
  (defonce game-thread
    (thread
      (loop [k 0]
        (<!! (async/timeout 10))
        (let [data @world
              ids (keys (:cycles/by-id data))]
          (doseq [i ids :let [auto (get-in data [:cycles/by-id i])]]
            (if-let [act (:act auto)]
              (dosync (alter world update-in [:cycles/by-id i] u/sym act))
              (if-let [target (:target auto)]
                (dosync (alter world update-in [:cycles/by-id i] u/plan+sym
                               (cons :goto (:position target)))))))
          (if (zero? (mod k 2)) (broadcast))
          (recur (inc k)))))))

(defn -main [& args]
  (println "Server starting...")
  (start-websocket)
  (start-router)
  (start-game)
  (server/run-server #'handler
    {:port (or (some-> (first args) (Integer/parseInt))
               3000)}))

(defn start [] (ra/start-figwheel!))

(defn stop [] (ra/stop-figwheel!))

(defn cljs [] (ra/cljs-repl))
