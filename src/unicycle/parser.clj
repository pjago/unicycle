(ns unicycle.parser
  (:refer-clojure :exclude [read])
  (:require [om.next.server :as om]
            [om.util :as is]
            [om.tempid :refer [tempid?]]))

(defn watch [{:keys [log ast uid]} key params]
  (when-not (:target ast)
    (alter log conj [uid key])
    (if (-> @log count (>= 500))
      (alter log (comp vec rest))))
  key)

(defn new-tag [links url tag]
  (as-> tag tag*
    (if (tempid? tag)
      (subs (str tag) 7 (dec (count (str tag))))
      (name tag))
    (if (contains? links tag*)
      (str (gensym tag*))
      tag*)))

(defn tempids [roots uid tempid new]
  {:tempids (into {} (map (fn [k] [[k tempid] [k new]]))
                     (keys (get roots uid)))})

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
          {:value found}
          {:value ::not-found})))

(defmethod read ::tags [{:keys [state]} key {:keys [value] :or {value true}}]
  (let [data @state shape (get data key)]
    (if value ;(om/db->tree query (get data key) data)
      {:value (mapv #(get-in data %) shape)}
      {:value shape})))

(defmethod read :default [{tags :state} key _]
  (if-let [found (get @tags key)]
    {:value found}
    {:value ::not-found}))

(defmethod read :uid [{uid :uid} _ _] ;todo: remove
  {:value uid})

(defmulti mutate om/dispatch :hierarchy #'grammar)

(defmethod mutate 'tag/assoc [{:keys [state links url uid]} _ {$ :tag as :value}]
  (let [tag (or $ (keyword "tag" uid))]
    {:action #(when-not (new-tag @links url tag)
                (alter state assoc-in [(.key as) tag] as)
                nil)}))

(defmethod mutate 'tag/dissoc [{:keys [state]} _ {tag :tag as :value}]
  {:action #(do (alter state update as dissoc tag)
                nil)})

(defmethod mutate 'tag/new [{:keys [links roots url uid]} _ {tag :tag}]
  (if-let [new (new-tag @links url (or tag uid))]
    {:action #(do (alter links update url (fnil conj #{}) new)
                  (alter links update uid (fnil conj #{}) new)
                  (alter links update new (fnil conj #{}) new)
                  nil)
     :value (if (tempid? tag)
              (tempids @roots uid tag (keyword "tag" new)))}))

(defmethod mutate 'tag/delete [{:keys [links url uid]} _ _]
  {:action #(do (doseq [tag (get @links uid)]
                  (alter links update tag disj uid))
                (alter links update url disj uid)
                (alter links dissoc uid)
                nil)})

(defmethod mutate 'tag/root [{:keys [state roots uid]} _ params]
  {:action #(do (alter roots assoc uid params)
                nil)})

(defmethod mutate :default [_ _ _])

(defmethod mutate 'unicycle.app/uid-set [{:keys [uid roots]} _ {tmp :tempid}] ;todo: remove
  (if (tempid? tmp)
    {:value (tempids @roots uid tmp (keyword "tag" uid))}))