(ns unicycle.handlers
  (:require [unicycle.socket :refer [event]]
            [unicycle.parser :as p]
            [om.next.server :as om]
            [compojure.core :refer [routes GET POST]]
            [compojure.route :as route]
            [ring.util.response :refer [content-type response resource-response]]))

(def parser (om/parser {:read p/read :mutate p/mutate}))

(defn by [id]
  (filter #(clojure.string/includes?
             (or (:id (val %)) "")
             (or id ""))))

(def pretty-response #(response (with-out-str (clojure.pprint/pprint %))))

(defn ring-handler [{:as env :keys [lab log users sente]}]
  (routes
    (GET "/" []
      (-> (resource-response "index.html")
          (content-type "text/html")))
    (GET "/users" []
      (-> (pretty-response @users)
          (content-type "text/plain")))
    (GET "/log" []
      (-> (pretty-response @log)
          (content-type "text/plain")))
    (GET "/lab/:id" [id]
      (-> (response (into {} (by id) @lab))
          (content-type "application/json")))
    (POST "/lab/:id" [id :as {?query :body-params url :remote-addr}]
      (when (-> @users (get url) (get id))
        (-> (assoc env :uid id :url url)
            (parser ?query)
            (dosync))))
    (route/resources "/" {:root ""})))

(defn sente-handler [{:as env send! :chsk-send!}]
  (fn [{:as msg id :uid {addr :remote-addr} :ring-req}]
    (when-let [?query (event msg)]
      (cond-> (-> (assoc env :uid id :url addr)
                  (parser ?query)
                  (dosync))
        (some (complement list?) ?query)                    ;todo: simpler
        (->> (into {} (filter (fn [[k _]] (keyword? k))))
             (vector :query/remote)
             (send! id))))))