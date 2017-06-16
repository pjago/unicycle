(ns unicycle.handlers
  (:require [unicycle.socket :refer [event]]
            [unicycle.parser :as p]
            [om.next.server :as om]
            [compojure.core :refer [routes GET POST]]
            [compojure.route :as route]
            [ring.util.response :refer [content-type response resource-response]]))

(def parser (om/parser {:read p/read :mutate p/mutate}))
(def query-response #(into {} (filter (fn [[k _]] (keyword? k))) %))
(def pretty-response #(response (with-out-str (clojure.pprint/pprint %))))

(defn ring-handler [{:as env :keys [state log tags]}]
  (routes
    (GET "/" []
      (-> (resource-response "unicycle.html")
          (content-type "text/html")))
    (GET "/log" []
      (-> (pretty-response @log)
          (content-type "text/plain")))
    (GET "/tags" []
      (-> (pretty-response @tags)
          (content-type "text/plain")))
    (GET "/tag" []
      (-> (response @state)
          (content-type "application/json")))
    (GET "/tag/:id" [id]
      (-> (response (select-keys @state (get @tags id)))
          (content-type "application/json")))
    (POST "/tag/:id" [id :as {?query :body-params url :remote-addr}]
      (when (-> @tags (get url) (get id))
        (-> (assoc env :uid id :url url)
            (parser ?query)
            (dosync)
            (query-response)
            (content-type "application/json"))))
    (route/resources "/" {:root ""})))

(defn sente-handler [{:as env send! :chsk-send!}]
  (fn [{:as msg uid :uid {url :remote-addr} :ring-req}]
    (when-let [?query (event msg)]
      (-> (assoc env :uid uid :url url)
          (parser ?query)
          (dosync)
          (->> (query-response)
               (vector ::sente)
               (send! uid))))))