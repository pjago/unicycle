(ns unicycle.ui
  (:require [clojure.string :refer [split join capitalize]]))

(defn camel [input-symbol]
  (let [words (split (name input-symbol) #"[\s_-]+")]
    (symbol (join "" (map capitalize words)))))

#?(:clj
   (defmacro deftag [name args & body]
     (let [-name (symbol (str "-" name))
           Name  (camel name)
           query (mapv keyword args)]
       `(do (defn ~-name [{:keys ~args}] ~@body)
            (om.next/defui ~Name
              ~'static om.next/IQuery
              (~'query [this#]
                ~query)
              ~'Object
              (~'render [this#]
                (~-name (om.next/props this#))))
            (def ~name (om.next/factory ~Name))))))

#?(:clj
   (defmacro defhot [name args body]
     (let [typed #(keyword (str name) (str %))
           Name  (camel name)
           query (into [:type :tag] (mapv keyword args))
           union {:name (last body)
                  :Name (mapv camel (last body))
                  :type (mapv typed (last body))}
           this  (gensym "this")
           props (gensym "props")
           type  (gensym "type")]
       `(do (om.next/defui ~Name
              ~'static om.next/IQueryParams
              (~'params [~this]
                {:only []})
              ~'static om.next/Ident
              (~'ident [~this {tag# :tag ~type :type}]
                [~type tag#])
              ~'static om.next/IQuery
              (~'query [~this]
                ~(zipmap (:type union)
                         (map (fn [N] `(into ~query (om.next/get-query ~N)))
                              (:Name union))))
              ~'Object
              (~'render [~this]
                (let [{~type :type :keys ~args :as ~props} (om.next/props ~this)]
                  ~(concat (drop-last body)
                           `[(apply (case ~type ~@(interleave (:type union) (:name union)))
                                    (dissoc ~props ~@query)
                                    (om.next/children ~this))]))))
            (def ~name (om.next/factory ~Name {:keyfn (comp str (juxt :type :tag))}))))))