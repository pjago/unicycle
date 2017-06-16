(ns unicycle.systems
  (:require [unicycle.handlers :refer [ring-handler sente-handler]]
            [unicycle.components :refer [map->Game new-web-server]]
            [environ.core :refer [env]]
            [taoensso.sente.server-adapters.http-kit :refer [get-sch-adapter]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [compojure.middleware :refer [wrap-canonical-redirect]]
            [com.stuartsierra.component :as component]
            (system.components
              ;[http-kit :refer [new-web-server]]
              [sente :refer [new-channel-sockets sente-routes]]
              [handler :refer [new-handler]]
              [endpoint :refer [new-endpoint]]
              [middleware :refer [new-middleware]])))

;config
(def port 
  (let [numb (env :http-port)]
    (or (if (string? numb)
          (Integer. numb)
          numb)
        3001)))

(def ip (or (env :ip-server) "127.0.0.1"))

(def pool (atom {}))

(defn new-uid [{cid :client-id url :remote-addr}]
  (swap! pool update cid
         #(if-not ((set %) url)
            ((fnil conj []) % url)
            %))
  (-> #(when (= %2 url) %1)
      (keep-indexed (get @pool cid))
      (first)
      (as-> n (if-not (zero? n)
                (str cid "_" n)
                cid))))

(def init-data
  {:state {}
   :log   []
   :tags  {}})

(def site
  (-> site-defaults
      (assoc-in [:static :resources] "/static")
      (assoc-in [:security :anti-forgery] false)))

(defn redirect [^String uri]
  (if (and (.endsWith uri "/") (not= uri "/"))
    (.substring uri 0 (dec (.length uri)))
    uri))

;systems
(defn uni-system []
  (component/system-map
    :state (ref (:state init-data))
    :log (ref (:log init-data))
    :tags (ref (:tags init-data))
    :game (component/using
            (map->Game {:fps 60})
            [:state])
    :sente (component/using
             (new-channel-sockets sente-handler (get-sch-adapter)
               {:user-id-fn      #'new-uid
                :wrap-component? true})
             [:state :log :tags])
    :app-middleware (new-middleware {:middleware [wrap-restful-format]})
    :middleware (new-middleware {:middleware [[wrap-defaults site]
                                              [wrap-canonical-redirect redirect]]})
    :sente-endpoint (component/using
                      (new-endpoint sente-routes)
                      [:sente])
    :app-endpoints (component/using
                     (new-endpoint ring-handler)
                     [:state :log :tags :app-middleware])
    :handler (component/using
               (new-handler)
               [:sente-endpoint :app-endpoints :middleware])
    :http (component/using
            (new-web-server port nil {:ip ip})
            [:handler])))
