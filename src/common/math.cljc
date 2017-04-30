(ns common.math
  (:refer-clojure :exclude [+ - * / map])
  (:require [clojure.spec :as s]
            [clojure.core.matrix :as m])
  (:use [clojure.core.matrix.operators :only [+ - * /] :rename {/ |}]))

;GEOMETRIC
(def ^:const π Math/PI)
(def ^:const τ (* π 2))
(def ^:const π:2 (| π 2))
(def ^:const π:4 (| π 4))
(def ^:const π:6 (| π 6))

(defn /
  ([x] x)
  ([x y] (| (* x y) (+ x y)))
  ([x y & more] (reduce / (/ x y) more)))

;SIMULATION
(def ^:const dt (| 60))

;UNITS
(def ^:const rad:s->rpm (| 60 τ))
(def ^:const m:s->km:h 3.6)
(def ^:const rad->deg (| 180 π))

;SCALE
(defn constrain
  ([v abs] (-> v (max (- abs)) (min abs)))
  ([v inf sup] (-> v (max inf) (min sup))))

(defn upper-bound [v B]
  (let [max (m/maximum (m/abs v))]
    (if (<= max B) v (* v B (| max)))))

(defn lower-bound [v b]
  (let [min (m/minimum (m/abs v))]
    (if (>= min b) v (* v b (| min)))))

(defn map [v p P n N]
  (->> (- p P) | (* (- v p) (- n N)) (+ n)))

;HOMOGENEOUS COORDINATES todo: generic dimension
(s/def ::pos (s/cat :X (s/+ number?) :A number?))
(s/def ::yaw number?) ;temp
(s/def ::body (s/keys :req-un [::pos ::yaw])) ;temp

(defn translate [to]
  [[1 0 0] [0 1 0] [(- (first to)) (- (second to)) 1]])

(s/fdef translate
  :args (s/cat :origin (s/spec ::pos))
  :ret m/matrix?)

(defn rotate [to]
  (let [c (m/cos to) s (m/sin to)]
    [[c (- s) 0] [s c 0] [0 0 1]]))

(s/fdef rotate
  :args (s/cat :axis ::yaw)
  :ret m/matrix?)

(defn scale [to]
  [[to 0 0] [0 to 0] [0 0 1]])

(s/fdef scale
  :args (s/cat :scaling number?)
  :ret m/matrix?)

(defn glob->body [{:keys [pos yaw] :or {yaw 0 pos [0 0 1]}}]
  (m/mmul (translate pos) (rotate yaw)))

(defn quad->phas [[x y]]
  [(m/magnitude [x y]) (Math/atan2 y x)])

(defn detour [pos body]
  (->> body glob->body (m/mmul pos) quad->phas))
