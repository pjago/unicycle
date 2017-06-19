(ns common.math
  (:refer-clojure :exclude [+ - * / map cycle])
  (:require [clojure.spec.alpha :as s]
            [clojure.core.matrix :as m])
  (:use [clojure.core.matrix.operators :only [+ - * /] :rename {/ |}]))

;GEOMETRIC
(def ^:const π Math/PI)
(def ^:const τ (* π 2))
(def ^:const π:2 (| π 2))
(def ^:const π:4 (| π 4))
(def ^:const π:6 (| π 6))
(def ^:const +inf #?(:clj Double/POSITIVE_INFINITY :cljs js/Infinity))
(def ^:const -inf (- +inf))

(defn dist [xseq yseq]
  (Math/sqrt
    (loop [acc 0 xs xseq ys yseq]
      (if-let [x (first xs)]
        (if-let [y (first ys)]
          (recur (+ acc (Math/abs (- x y)))
                 (drop 1 xs)
                 (drop 1 ys))
          acc)
        acc))))

(defn /
  ([x] x)
  ([x y] (| (* x y) (+ x y)))
  ([x y & more] (reduce / (/ x y) more)))

;TRANSDUCERS
(defn monotone [tone]
  (let [pitch (volatile! (tone))]
    (filter #(when-let [tonic (tone % @pitch)]
               (vreset! pitch tonic)
               true))))

(defn closest [keyfn to]
  (monotone
    (fn ([] +inf)
        ([m y] (if-let [v (keyfn m)]
                 (let [x (dist v to)]
                   (if (<= x y)
                     x)))))))

;UNITS
(def ^:const fps 30)
(def ^:const dt (| fps))
(def ^:const rad:s->rpm (| 60 τ))
(def ^:const m:s->km:h 3.6)
(def ^:const rad->deg (| 180 π))

(s/def ::R (s/or :int int? :double (s/double-in)))
(s/def ::R+ (s/or :zero zero? :int pos-int? :double (s/double-in :min 0)))
(s/def ::fuzzy (s/double-in :min -1 :max 1))

;BOUNDARY
(defn constrain
  ([v abs] (-> v (max (- abs)) (min abs)))
  ([v inf sup] (-> v (max inf) (min sup))))

(defn upper-bound [v B]
  (let [max (m/maximum (m/abs v))]
    (if (<= max B) v (* v B (| max)))))

(defn lower-bound [v b]
  (let [min (m/minimum (m/abs v))]
    (if (>= min b) v (* v b (| min)))))

(defn map [v o O p P]
  (->> (- o O) | (* (- v o) (- p P)) (+ p)))

(defn cycle
  ([v abs] (-> v (map (- abs) abs 0 1) (mod 1) (map 0 1 (- abs) abs)))
  ([v inf sup] (-> v (map inf sup 0 1) (mod 1) (map 0 1 inf sup))))

;HOMOGENEOUS COORDINATES
(s/def ::position (s/cat :X (s/+ ::R) :A #{1.0}))
(s/def ::yaw ::R)
(s/def ::body (s/keys :req-un [::position ::yaw]))

(defn translate [to]
  [[1 0 0] [0 1 0] [(- (first to)) (- (second to)) 1]])

(s/fdef translate
  :args (s/cat :origin (s/spec ::position))
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
  :args (s/cat :scaling ::R)
  :ret m/matrix?)

(defn glob->body [{:keys [position yaw] :or {yaw 0 position [0 0 1]}}]
  (m/mmul (translate position) (rotate yaw)))

(defn quad->phas [[x y]]
  [(m/magnitude [x y]) (Math/atan2 y x)])

(defn polar [position body]
  (->> body glob->body (m/mmul position) quad->phas))
