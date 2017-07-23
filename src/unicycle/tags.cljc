(ns unicycle.tags
  (:require [common.cljc #?(:cljs :refer-macros :clj :refer) [if-cljs]]
            [clojure.string :refer [split join capitalize]]
            [om.next :as om])
  #?(:clj (:import [com.cognitect.transit WriteHandler ReadHandler]
                   [clojure.lang PersistentVector IMapEntry])))

(defn camel [named-input]
  (let [words (split (name named-input) #"[\s_-]+")]
    (join "" (map capitalize words))))

(defprotocol IRenderer
  (draw [props] [props children]))

(extend-protocol IRenderer
  #?(:cljs cljs.core/PersistentVector
     :clj  PersistentVector)
  (draw
    ([nested] (reduce #(draw %2 %1) [] (rseq nested)))
    ([nested children] (reduce #(draw %2 %1) children (rseq nested)))))

#?(:clj
   (defmacro deftag [name props&children & body]
     (let [Name       (symbol (camel name))
           Name#      (symbol (str Name "#"))
           ->Name#    (symbol (str "->" Name#))
           NameWriter (symbol (str Name "Writer"))
           NameReader (symbol (str Name "Reader"))
           kname      (keyword (str *ns*) (str name))
           props      (if (-> (rseq props&children) (second) (= '&))
                        (subvec props&children 0 (- (count props&children) 2))
                        props&children)
           children   (if-not (= props props&children)
                        (peek props&children))
           query      (mapv keyword props)
           rep-props  (mapv #(list '. 'r (symbol (str "-" %))) props)
           this#      (gensym "this")
           props#     (gensym "props")
           children#  (gensym "children")]
       `(do #_ (om.next component)
            (om.next/defui ~Name
              ~'static om.next/Ident
              (~'ident [~this# ~props#]
                [~kname (-> ~props# meta :om-path first)])
              ~'static om.next/IQuery
              (~'query [~this#]
                ~query)
              ~'Object
              (~'render [~this#]
                (let [{:keys ~props} (om.next/props ~this#)
                      ~@(if-not (nil? children)
                          `[~children (om.next/children ~this#)]
                          `[])]
                  ~@body)))
            #_ (om.next factory)
            (def ~name
              (om.next/factory ~Name {:keyfn (fn [~props#] (str [~kname (-> ~props# meta :om-path first)]))}))
            #_ (tag component)
            (if-cljs
              (defrecord ~Name# ~props
                unicycle.tags/IRenderer
                (~'draw [~props#] (~name ~props#))
                (~'draw [~props# ~children#]
                  ~(if-not (nil? children)
                     `[(~name ~props# ~children#)]
                     `(cons (~name ~props#) ~children#)))
                cljs.core/IMapEntry
                (~'-key [~props#] ~kname)
                (~'-val [~props#] ~props#))
              (defrecord ~Name# ~props
                unicycle.tags/IRenderer
                (~'draw [~props#] (~name ~props#))
                (~'draw [~props# ~children#]
                  ~(if-not (nil? children)
                     `[(~name ~props# ~children#)]
                     `(cons (~name ~props#) ~children#)))
                IMapEntry
                (~'key [~props#] ~kname)
                (~'val [~props#] ~props#)))
            #_ (tag writer)
            (if-cljs
              (def ~NameWriter
                (reify ~'Object
                  (~'tag ~'[_ _] ~(str name))
                  (~'rep ~'[_ r] ~rep-props)
                  (~'stringRep ~'[_ _] nil)))
              (def ~NameWriter
                (reify WriteHandler
                  (~'tag ~'[_ _] ~(str name))
                  (~'rep ~'[_ r] ~rep-props)
                  (~'stringRep ~'[_ _] nil)
                  (~'getVerboseHandler ~'[_] nil))))
            #_ (tag reader)
            (if-cljs
              (defn ~NameReader [[~@props]]
                (~->Name# ~@props))
              (def ~NameReader
                (reify ReadHandler
                  (~'fromRep [_ [~@props]] (~->Name# ~@props)))))))))
;todo: move ident to Union Component
(defmacro get-query [& components]
  (zipmap components
    (map #(list 'om.next/get-query (symbol (namespace %) (camel %)))
         components)))