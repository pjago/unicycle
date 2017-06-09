(ns unicycle.server
  (:import (javax.swing JFrame)
           (java.awt.event WindowAdapter))
  (:require [com.stuartsierra.component :refer [start stop]]
            [unicycle.systems :refer [port uni-system]]
            [clojure.core.async :refer [<!!]])
  (:gen-class))

(defn -main [& args]
  (let [sys (start (uni-system))
        on-exit (proxy [WindowAdapter] []
                  (windowClosing [event]
                    (spit "data.txt"
                      (with-out-str
                        (clojure.pprint/pprint
                          (<!! (-> sys stop :game :loop)))))
                    (System/exit 0)))]
    (doto (JFrame. (str "Serving at http://localhost:" port))
      (.setSize 500 1)
      (.setDefaultCloseOperation (. JFrame EXIT_ON_CLOSE))
      (.addWindowListener on-exit)
      (.setVisible true))))
