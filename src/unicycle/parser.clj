(ns unicycle.parser
  (:refer-clojure :exclude [read])
  (:require [om.next.server :as om]))

(defn watch [{:keys [uid log]} key params]
  (when-not (and (nil? params) (= key :tags))
    (alter log conj [uid key])
    (if (-> @log count (>= 500))
      (alter log (comp vec rest))))
  key)

(defmulti read om/dispatch)

(defmethod read :tags [{tags :state {?q :query} :ast} _ {:keys [only]}]
  {:value (cond->> (if (some? only)
                     (select-keys @tags only)
                     @tags)
                   (some? ?q) ;the query is asymetric, since the server has no distinction of type
                   (into {} (map (fn [[k v]] ;on the client it is a union. here it is a join
                                   [k (select-keys v ?q)]))))})

(defmethod read :default [{tags :state} key _]
  (if-let [found (get @tags key)]
    {:value found}
    {:value ::not-found}))

(defmethod read :uid [{id :uid} _ _]
  {:value id})

(defmulti mutate om/dispatch)

(defmethod mutate 'tag/act [{:keys [state uid]} _ {u :value}]
  {:action #(do (alter state assoc-in [uid :act] u)
                nil)})

(defmethod mutate 'tag/merge [{:keys [state links url uid]} _ {tag :tag :as data}]
  (if (or (nil? tag) (= uid tag))
    {:action #(do (alter state update uid merge data)
                  nil)}
    {:action #(when (-> @links (get url) (get tag))
                (alter links update uid (fnil conj #{}) tag)
                (alter state update tag merge data)
                nil)}))

(defmethod mutate 'tag/new [{:keys [state links url uid]} _ {tag :tag :as data}]
  (if (or (nil? tag) (= uid tag))
    {:action #(do (alter links update url (fnil conj #{}) uid)
                  (alter links update uid (fnil conj #{}) uid)
                  (alter state assoc uid (assoc data :tag uid))
                  nil)}
    {:action #(do (alter links update url (fnil conj #{}) tag)
                  (alter links update tag (fnil conj #{}) tag)
                  (alter links update uid (fnil conj #{}) tag)
                  (alter state assoc tag (assoc data :tag tag))
                  nil)}))

(defmethod mutate 'tag/delete [{:keys [state links url uid]} _ _]
  {:action #(do (doseq [tag (get @links uid)]
                  (alter links update tag disj uid))
                (alter links update url disj uid)
                (alter links dissoc uid)
                (alter state dissoc uid)
                nil)})

(defmethod mutate 'tag/clear [{:keys [state links uid]} _ _]
  {:action #(do (alter state assoc uid {:tag uid})
                nil)})

(defmethod mutate 'tag/root [{:keys [state uid roots]} _ params]
  {:action #(do (alter roots assoc uid params)
                nil)})

(defmethod mutate 'stream/toggle [_ _ _])

(defmethod mutate 'uid/set [{:keys [uid roots]} _ {tempid :tempid}]
  (if (some? tempid)
    {:value {:tempids (into {} (map (fn [k] [[k tempid] [k uid]]))
                               (keys (get @roots uid)))}}))
