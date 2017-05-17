(ns unicycle.core-test
  (:refer-clojure :exclude [+ - * /])
  (:require [clojure.spec :as s]
            [clojure.spec.test :as test]
            [clojure.core.matrix :as m]
            [common.math :as a]
            [unicycle.core :as u]
            [quil.core :as q])
  (:use [clojure.core.matrix.operators :only [+ - * /]]))

(def scale 2)
(def autø
  {:position [0.0 0.0 1.0]
   :wheels [:dff [0.2 0.1]]
   :engine [250.0 250.0]
   :yaw 0.0
   :kρ 1.0
   :kϕ 2.0
   :ϵ 0.2})
(comment
  ;TEST DRIVE
  (test/instrument `[u/uni-sym u/uni-plan u/auto-scale])
  (test/summarize-results (test/check `[u/uni-sym u/uni-plan]))
  (test/summarize-results (test/check `[u/auto-scale]))

  (m/mmul (u/uni->dff (nth (:wheels autø) 1)) [a/π:2 0.0])
  (m/mmul (u/dff->uni (nth (:wheels autø) 1))) [300.0 300.0]

  (m/mmul (u/uni->dff (last (:wheels autø))) [0.0 (* a/π:2 10.0)])
  (m/mmul (u/dff->uni (last (:wheels autø)))) [300.0 -300.0]

  (reduce u/uni-sym autø (repeat 100 [0.0 1.0]))
  (reduce u/uni-sym autø (repeat 100 [1.0 0.0]))
  (reduce u/uni-sym autø (repeat 100 [1.0 1.0]))

  (reduce u/uni-sym autø (repeat 100 [a/π:2 0.0]))
  (reduce u/sym autø (repeat 100 [300.0 300.0]))

  (reduce u/sym
          (assoc autø :wheels [:uni 0] :engine [a/π:2 0.0])
          (repeat 100 [0.0 (* a/π:2 10.0)]))
  (reduce u/sym autø (repeat 100 [300.0 -300.0]))

  ;TEST PLAN
  (def spot [-2.0 1.5 1.0])
  (def auto (merge autø {:kρ 2.0 :kϕ 5.0 :ϵ 0.2}))

  (m/mmul spot (a/glob->body auto))
  (m/mmul spot (a/glob->body (u/plan+sym auto (cons :goto spot))))
  (u/plan auto (cons :goto (a/polar spot auto)))
  (a/polar spot (u/plan+sym auto (cons :goto spot)))

  (reduce u/plan+sym auto (repeat 1500 (cons :goto spot)))

  ;QUIL ;todo: fun mode
  (def ^:const swidth 1320)
  (def ^:const sheight 920)
  (def ^:const sscale 2)
  (def ^:const window->frame
    (m/mmul
     (a/translate [(/ swidth 2) (/ sheight 2) 1])
     (a/scale (/ sscale))))

  (def init
    {:auto (u/auto-scale 100.0 auto)
     :spot {:position (m/mmul spot (a/scale 100)) :d (* (:ϵ auto) 100)}
     :cmd (cycle [:goto :circle :avoid])
     :wheels (cycle [[:uni 0] [:dff [20.0 10.0]] [:car 20.0 0.0]])
     :engine (cycle [[131.0 (* 15 a/π:2)] [250.0 250.0] [131.0 a/π:2]])})

  (def state (atom init))

  (defn re-paint! []
    (q/background 200))

  (defn re-tire! []
    (swap! state update :wheels rest)
    (swap! state update :engine rest)
    (swap! state assoc-in [:auto :engine] (first (:engine @state)))
    (swap! state assoc-in [:auto :wheels] (first (:wheels @state))))

  (defn re-spot! []
    (let [smouse (m/mmul [(q/mouse-x) (q/mouse-y) 1] window->frame)]
      (swap! state update :spot assoc :position smouse)))

  (defn re-plan! []
    (swap! state update :cmd rest))

  (defn setup! []
    (q/rect-mode :center)
    (q/frame-rate 60))

  (defn draw! []
    (q/translate (/ swidth 2) (/ sheight 2))
    (q/scale sscale)
    (let [{:keys [position d]} (:spot @state)]
      (swap! state update :auto u/plan+sym (cons (first (:cmd @state)) position))
      (q/fill 200 0 0)
      (q/ellipse (position 0) (position 1) d d))
    (let [{:keys [position yaw wheels] :as it} (:auto @state)]
      (when (= (nth wheels 0) :car)
        (q/stroke 255)
        (q/line 0 0 (* 20 (m/sin (nth wheels 2))) (* -20 (m/cos (nth wheels 2)))))
      (q/push-matrix)
      (q/translate (position 0) (position 1))
      (q/rotate yaw)
      (q/stroke 255)
      (q/rect 0 0 20 20)
      (q/ellipse (- 20 (/ 10 2)) 0 10 10)
      (q/pop-matrix)))

  (q/defsketch example
    :title "Simple sketch"
    :settings #(q/smooth 2)
    :setup setup!
    :draw draw!
    :mouse-moved re-spot!
    :mouse-clicked re-plan!
    :key-pressed re-paint!
    :mouse-entered re-tire!
    :size [swidth sheight]))
