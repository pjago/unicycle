(ns unicycle.systems
  (:require [unicycle.handlers :refer [ring-handler sente-handler]]
            [unicycle.components :as process]
            [environ.core :refer [env]]
            [taoensso.sente.server-adapters.http-kit :refer [get-sch-adapter]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.format :refer [wrap-restful-format]]
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
        3002)))

(def ip (or (env :ip-server) "127.0.0.1"))

(defn new-uid [{{cid :client-id} :params}]
  (str (gensym cid)))

(def init-data
  {:lab {}
   :log []
   :users {}})

(def site
  (-> site-defaults
      (assoc-in [:static :resources] "/static")
      (assoc-in [:security :anti-forgery] false)))

;systems
(defn uni-system []
  (component/system-map
    :lab (ref (:lab init-data))
    :log (ref (:log init-data))
    :users (ref (:users init-data))
    :game (component/using
            (process/map->Game {:fps 60})
            [:lab])
    :sente (component/using
             (new-channel-sockets sente-handler (get-sch-adapter)
               {:user-id-fn      #'new-uid
                :wrap-component? true})
             [:lab :log :users])
    :app-middleware (new-middleware {:middleware [wrap-restful-format]})
    :middleware (new-middleware {:middleware [[wrap-defaults site]]})
    :sente-endpoint (component/using
                      (new-endpoint sente-routes)
                      [:sente])
    :app-endpoints (component/using
                     (new-endpoint ring-handler)
                     [:lab :log :users :sente :app-middleware])
    :handler (component/using
               (new-handler)
               [:sente-endpoint :app-endpoints :middleware])
    :http (component/using
            (new-web-server port nil {:ip ip})
            [:handler])))
