(ns common.web
  (:require [clojure.string :as str]
            #?(:cljs [cljsjs.react])
            #?(:cljs [om.util :as util]))
  #?(:cljs (:require-macros [common.web :as web])))

(defn serialize "attempts to serialize something into a string" [props]
  (cond
    (fn? props) "[object Function]"
    (keyword? props) (subs (str props) 1)
    (symbol? props) (name props)
    (or (seq? props) (vector? props)) (str/join " " (map serialize props))
    (or (map? props) (record? props))
    (str/join "; "
      (map (fn [[k v]] (str/join ": " [(subs (str k) 1) (serialize v)])) props))
    :else props))
(defn map->frame "serializes a map into a-frame like tag" [m]
  (zipmap (keys m) (map serialize (vals m))))

(def tags
  #{"a-entity"
    "a-animation"
    "a-scene"
    "a-event"
    "a-assets"
    "a-cubemap"
    "a-mixin"
    "a-node"
    "a-register-element"})
#?(:clj
    (do
      (defn ^:private gen-tag-inline-fn "creates macro for tag" [tag]
        `(defmacro ~(symbol tag) [opts# & children#]
           `(~'~(symbol "js" (str "React.createElement")) ~'~tag
                (-> ~opts# map->frame cljs.core/clj->js)
              ~@(clojure.core/map (fn [x#] `(om.util/force-children ~x#)) children#))))
      (defmacro ^:private gen-tags-inline-fns []
        `(do ~@(clojure.core/map gen-tag-inline-fn tags)))
      (gen-tags-inline-fns)
      (defn ^:private gen-tag-fn "creates fn for tag (to apply)" [tag]
        `(defn ~(symbol tag) [opts# & children#]
          (js/React.createElement ~tag (-> opts# map->frame cljs.core/clj->js)
            (cljs.core/map om.util/force-children children#))))
      (defmacro ^:private gen-tags-fns []
        `(do ~@(clojure.core/map gen-tag-fn tags)))))
#?(:cljs
    (do
      (web/gen-tags-fns)
      (defn el "creates element by string tag" [tag opts & children]
        (js/React.createElement tag (-> opts map->frame clj->js) (map util/force-children children)))
      (defn custom "deeply turns a map into an element of tag :type (defaults to a-entity)" [e & c]
        (let [childs (map custom (-> e :children)) props (dissoc e :children)]
          (-> props :type tags (or "a-entity") (el props childs c))))))
