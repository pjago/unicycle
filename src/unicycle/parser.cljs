(ns unicycle.parser
  (:refer-clojure :exclude [read])
  (:require [om.next :as om]
            [om.util :as is]))

(def grammar (make-hierarchy))

(defmulti read om/dispatch :hierarchy #'grammar)

(defmethod read ::components [{:keys [state ast]} key _]
  (as-> (:key ast) ?key
    (if (is/ident? ?key)
      (if (= (peek ?key) '_)
        (pop ?key)
        ?key)
      [key])
    (if-let [found (get-in @state ?key)]
      {:value found :remote (= (:target ast) :remote)}
      {:value ::not-found})))

(defmethod read ::tags [{:keys [state]} key {:keys [value] :or {value true}}]
  (let [data @state shape (get data key)]
    (if value ;(om/db->tree query (get data key) data)
      {:value (mapv #(get-in data %) shape)}
      {:value shape})))

(defmethod read :default [{app :state} key _]
  (if-let [found (get @app key)]
    {:value found}
    {:value ::not-found}))

(defmulti mutate om/dispatch :hierarchy #'grammar)

(defmethod mutate 'tag/assoc [{:keys [state]} key {$ :tag new :value :as params}]
  (let [path [(.key new) $]]
    {:remote {:key key :params params :type :call}
     :action #(swap! state assoc-in path new)}))