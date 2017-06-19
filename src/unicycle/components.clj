(ns unicycle.components
  (:require [com.stuartsierra.component :as component]
            [clojure.core.async :as async :refer [>!! <!! alts!! close! thread]]
            [unicycle.core :as u])) ;to remove

(defn step [state]                                            ;todo: move to remote
  (let [data @state]
    (doseq [id (keys data) :let [auto (get data id)]]
      (if-let [act (:act auto)]
        (alter state update id #(->> act (u/act %) (u/sym %)))))))

(defrecord Game [state fps]
  component/Lifecycle
  (start [component]
    (let [history (async/chan (async/sliding-buffer (* fps 10)))
          exit    (async/chan 1)
          ms      (/ 1000 fps)
          out     (async/into [] history)]
      (thread
        (loop []
          (let [[_ ch] (alts!! [exit (async/timeout ms)])]
            (if-not (identical? exit ch)
              (do (dosync (step state))
                  (>!! history @state)
                  (recur))
              (close! history)))))
      (assoc component
        :exit (fn [] (close! exit))
        :loop (async/pipe out (async/promise-chan)))))
  (stop [component]
    (if-let [exit (:exit component)]
      (exit))
    (dissoc component :exit)))