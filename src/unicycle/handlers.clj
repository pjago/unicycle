(ns unicycle.handlers
  (:require [unicycle.socket :refer [event]]
            [unicycle.parser :as p]
            [om.next.server :as om]
            [compojure.core :refer [routes GET POST]]
            [compojure.route :as route]
            [ring.util.response :refer [content-type response resource-response]]))

(def parser (om/parser {:read p/read :mutate p/mutate}))

(defmacro parse-with [env as-keys query]
  (let [keys (map keyword as-keys)]
    `(let [env# (assoc ~env ~@(interleave keys as-keys))]
       (dosync (parser env# ~query)))))

(defn ring-handler [{:keys [state log roots links] :as this}]
  (routes
    (GET "/" [] ;todo: "/user/pedro" -> application with uid pedro! (1st render from server)
      (-> (resource-response "unicycle.html")
          (content-type "text/html")))
    (GET "/log" [] (str @log))
    (GET "/roots" []
      (-> (response @roots)
          (content-type "application/json")))
    (GET "/links" []
      (-> (response @links)
          (content-type "application/json")))
    (GET "/tags" []
      (-> (response @state)
          (content-type "application/json")))
    (GET "/tags/:uid" [uid]
      (-> (response (response @state)) ;todo: something useful
          (content-type "application/json")))
    (POST "/tags/:uid" [uid :as {?query :body-params url :remote-addr}]
      (when (-> @links (get url) (get uid))
        (-> (parse-with this [url uid] ?query)
            (content-type "application/json"))))
    (route/resources "/" {:root ""})))

(defn sente-handler [{send! :chsk-send! :as this}]
  (fn [{:as msg uid :uid {url :remote-addr} :ring-req}]
    (if-let [?query (event msg)]
      (send! uid [::sente (parse-with this [url uid] ?query)]))))