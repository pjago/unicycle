(ns common.web
  (:require [clojure.string :as str]                        ;todo: use om.dom/create-element
            #?(:cljs [cljsjs.react])
            #?(:cljs [om.util :as util]))
  #?(:cljs (:require-macros [common.web :as web])))

(defn serialize "attempts to serialize the a-frame way" [props]
  (cond
    (string? props)
    props
    (number? props)
    (str props)
    (ident? props)
    (name props)
    (sequential? props)
    (str/join " " (map serialize props))
    (map? props)
    (str/join "; "
      (map (fn [[k v]] (str/join ": " [(name k) (serialize v)]))
           props))
    (fn? props)
    "[object Function]"
    :else "[object Unknown]"))

(defn map->frame "serializes a map into a-frame tag" [m]
  (zipmap (keys m)
          (map serialize
               (vals m))))

(def tags
  #{"a-entity"
    "a-animation"
    "a-scene"
    "a-assets"
    "a-cubemap"
    "a-mixin"
    "a-node"
    "a-register-element"})

#?(:clj
   (do ;macro tag (it's faster)
       (defn ^:private gen-tag-inline-fn [tag]
         `(defmacro ~(symbol tag) [opts# & children#]
            `(~'~(symbol "js" (str "React.createElement")) ~'~tag
               (-> ~opts# map->frame cljs.core/clj->js)
               ~@(clojure.core/map (fn [x#] `(om.util/force-children ~x#)) children#))))

       (defmacro ^:private gen-tags-inline-fns []
         `(do ~@(clojure.core/map gen-tag-inline-fn tags)))

       (gen-tags-inline-fns)

       ;fn tag (to apply)
       (defn ^:private gen-tag-fn [tag]
         `(defn ~(symbol tag) [opts# & children#]
            (apply js/React.createElement ~tag
                   (-> opts# map->frame cljs.core/clj->js)
                   (cljs.core/map om.util/force-children children#))))

       (defmacro ^:private gen-tags-fns []
         `(do ~@(clojure.core/map gen-tag-fn tags)))))

#?(:cljs
   (do (web/gen-tags-fns)

       ;string tag (general)
       (defn element [tag opts & children]
         (apply js/React.createElement tag
                (-> opts map->frame clj->js)
                (map util/force-children children)))

       (defn custom "custom element of tag :type (defaults to a-entity)" [props & children]
         (let [childs (map custom (-> props :children)) props (dissoc props :children)]
           (-> props :type tags (or "a-entity") (element props childs children))))))
