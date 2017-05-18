(ns unicycle.core
  (:refer-clojure :exclude [+ - * /])
  (:require [clojure.spec.alpha :as s]
            [common.math :refer [π τ dt] :as a]
            [clojure.core.matrix :as m])
  (:use [clojure.core.matrix.operators :only [+ - * /]]))

(s/def ::kρ ::a/R+)
(s/def ::kϕ ::a/R+)
(s/def ::ϵ ::a/R+)

(defmulti wheels first)
(defmethod wheels :uni [_] (s/tuple #{:uni} #{0.0}))
(defmethod wheels :dff [_] (s/tuple #{:dff} (s/cat :base ::a/R+ :diameter ::a/R+)))
(defmethod wheels :car [_] (s/tuple #{:car} ::a/R+ ::a/R))

(s/def ::position (s/cat :x ::a/R :y ::a/R :z #{1.0}))
(s/def ::yaw (s/double-in :min (- π) :max π))
(s/def ::geometry (s/cat :type ident? :size any? :angle (s/? any?)))
(s/def ::wheels (s/and (s/multi-spec wheels (fn [v _] v)) ::geometry))
(s/def ::engine (s/tuple ::a/R+ ::a/R+))
(s/def ::params (s/keys :req-un [::kρ ::kϕ ::ϵ]))
(s/def ::body (s/keys :req-un [::position ::yaw]))
(s/def ::cycle (s/keys :req-un [::wheels ::engine]))
(s/def ::auto (s/merge ::body ::cycle ::params))

(s/def ::task (s/cat :cmd #{:goto :avoid :circle} :ρ ::a/R+ :ϕ ::yaw))

(s/def ::uni (s/cat :v ::a/R+ :w ::a/R))
(s/def ::dff (s/cat :r ::a/R  :l ::a/R))
(s/def ::car (s/cat :v ::a/R+ :s ::a/R))

;HOMOGENEOUS COORDINATES
(defn auto-scale [to auto]
  (-> (update-in auto [:wheels 1] * to)
      (update :position m/mmul (a/scale to))
      (update :ϵ * to)))

(s/fdef auto-scale
  :args (s/cat :scaling ::a/R+ :to-scale ::auto)
  :ret ::auto)

(defn uni->dff [[base diameter]]
  (* a/rad:s->rpm (/ diameter) [[2.0 base] [2.0 (- base)]]))

(defn dff->uni [[base diameter]]
  (/ [[0.25 0.25] (/ [0.5 -0.5] base)] a/rad:s->rpm (/ diameter)))

;PLAN ;unpredictable path. todo: add map
(defn uni-plan [{:keys [kρ kϕ ϵ]} [cmd ρ ϕ]]
  (let [D (if (<= ρ ϵ) 0.0 1.0)
        A (- 1 (/ (Math/abs ϕ) π 0.5))
        S (if-not (zero? ϕ) (m/signum ϕ) -1.0)
        υ (case cmd
            (:goto :avoid) (* kρ ρ)
            :circle (* kρ ϵ))
        ω (case cmd
            :goto (* kϕ ϕ)
            :avoid (* kϕ (- ϕ (* π S)))
            :circle (- (* D (/ υ ρ) S) (* kϕ ϕ A)))]
    [υ ω D A S]))

(s/fdef uni-plan
  :args (s/cat :drive-params ::params :intends (s/spec ::task))
  :ret (s/cat :actuation ::uni
              :danger? (s/or :true #{0.0} :false #{1.0})
              :ahead? (s/double-in :min -1 :max 1)
              :side? (s/or :left #{-1.0} :right #{1.0})))

(defmulti plan (fn [hot _] (-> hot :wheels first)))

(defmethod plan :uni [auto task] (subvec (uni-plan auto task) 0 2))

(defmethod plan :dff [{:keys [kρ kϕ ϵ] :as it} task]
  (let [[υ* ω D* A _] (uni-plan it task)
        D (case (first task)
            :goto (if (neg? A) 0.0 1.0)
            :avoid (if (pos? A) 0.0 1.0)
            :circle D*)
        υ (case (first task)
            (:goto :avoid) (* D υ* A A)
            :circle υ*)]
    (-> it :wheels (nth 1) uni->dff (m/mmul [υ ω]))))

(defmethod plan :car [auto task] (subvec (uni-plan auto task) 0 2)) ;cheat

;ACT
(defmulti act (fn [hot _] (-> hot :wheels first)))

(defmethod act :uni [auto uni]
  (->> auto :engine (map a/constrain uni)))

(defmethod act :car [auto car]
  (->> auto :engine (map a/constrain car)))

(defmethod act :dff [{eng :engine} dff]
  (a/upper-bound dff (* (apply a// eng) (count eng))))

;SYM
(defn uni-sym [{:keys [yaw position] :as it} [v w]]
  (let [Δyaw (* w dt)
        yaw* (+ (* Δyaw 0.5) yaw)
        Δposition [(* v dt (m/cos yaw*)) (* v dt (m/sin yaw*)) 0]]
    (-> it
        (update :position + Δposition)
        (update :yaw + Δyaw)
        (update :yaw a/cycle π))))

(s/fdef uni-sym
  :args (s/cat :transform ::body :driver (s/spec ::uni))
  :ret ::body)

(defmulti sym (fn [hot _] (-> hot :wheels first)))

(defmethod sym :uni [auto uni]
  (uni-sym auto uni))

(defmethod sym :dff [auto dff]
  (uni-sym auto (-> auto :wheels (nth 1) dff->uni (m/mmul dff))))

(defmethod sym :car [{[_ l δ] :wheels :as it} [υ s]] ;wip
  (let [Δδ (- (a/constrain s (/ π 6)) δ) ;cheat
        δ* (+ (* Δδ 0.5) δ)]
    (-> (update-in it [:wheels 2] + Δδ)
        (uni-sym [υ (* υ (/ (m/tan δ*) l))]))))

;COMP
(defn plan+sym [auto [cmd & position]]
  (->> auto
       (a/polar position)
       (cons cmd)
       (plan auto)
       (act auto)
       (sym auto)))
