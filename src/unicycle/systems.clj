(ns unicycle.systems
  (:require [unicycle.handlers :refer [ring-handler sente-handler]]
            [unicycle.components :refer [map->Game]]
            [unicycle.socket :refer [get-packer]]
            [unicycle.parser :as p]
            [environ.core :refer [env]]
            [taoensso.sente.server-adapters.http-kit :refer [get-sch-adapter]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [compojure.middleware :refer [wrap-canonical-redirect]]
            [com.stuartsierra.component :as component]
            (system.components
              [http-kit :refer [new-web-server]]
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

(def ref-state
  {:state (ref {})
   :log   (ref [])
   :roots (ref {})
   :links (ref {})})

(defn new-uid [{cid :client-id url :remote-addr}]
  (or (p/new-tag @(:links ref-state) url cid)
      (str (gensym cid))))

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
  (let [sys (component/system-map
              :state (:state ref-state)
              :log   (:log ref-state)
              :roots (:roots ref-state)
              :links (:links ref-state)
              :game (component/using
                      (map->Game {:fps 30})
                      [:state])
              :sente (component/using
                       (new-channel-sockets sente-handler (get-sch-adapter)
                                            {:user-id-fn      #'new-uid
                                             :packer          (get-packer)
                                             :wrap-component? true})
                       [:state :log :roots :links])
              :sente-endpoint (component/using
                                (new-endpoint sente-routes)
                                [:sente])
              :ring-middleware (new-middleware {:middleware [wrap-restful-format]})
              :ring-endpoints (component/using
                                (new-endpoint ring-handler)
                                [:state :log :roots :links :ring-middleware])
              :middleware (new-middleware {:middleware [[wrap-defaults site]
                                                        [wrap-canonical-redirect redirect]]})
              :handler (component/using
                         (new-handler)
                         [:sente-endpoint :ring-endpoints :middleware])
              :http (component/using
                      (new-web-server port nil {:ip ip})
                      [:handler]))]
    (def system sys)
    sys))