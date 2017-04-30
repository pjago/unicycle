(ns unicycle.core
  (:refer-clojure :exclude [+ - * /])
  (:require [clojure.spec :as s]
            [common.math :refer [π τ dt] :as a]
            [clojure.core.matrix :as m])
  (:use [clojure.core.matrix.operators :only [+ - * /]]))

(s/def ::+ (s/and number? pos?))
(s/def ::kρ ::+)
(s/def ::kϕ ::+)
(s/def ::ϵ ::+)

(defmulti wheels first)
(defmethod wheels :uni [_] (s/tuple #{:uni} #{0 0.0}))
(defmethod wheels :dff [_] (s/tuple #{:dff} (s/cat :base ::+ :diam ::+)))
(defmethod wheels :car [_] (s/tuple #{:car} ::+ number?))

(s/def ::pos (s/cat :x number? :y number? :z #{1 1.0}))
(s/def ::yaw number?)
(s/def ::geom (s/cat :type ident? :size any? :angle (s/? any?)))
(s/def ::wheels (s/and (s/multi-spec wheels (fn [v _] v)) ::geom))
(s/def ::engine (s/tuple ::+ ::+))
(s/def ::params (s/keys :req-un [::kρ ::kϕ ::ϵ]))
(s/def ::body (s/keys :req-un [::pos ::yaw]))
(s/def ::cycle (s/keys :req-un [::wheels ::engine]))
(s/def ::auto (s/merge ::body ::cycle ::params))

(s/def ::task (s/cat :cmd #{:goto :avoid :circle} :ρ ::+ :ϕ number?))

(s/def ::uni (s/cat :v number? :w number?))
(s/def ::dff (s/cat :r number? :l number?))
(s/def ::car (s/cat :v number? :s number?))

;HOMOGENEOUS COORDINATES
(defn auto-scale [to auto]
  (-> (update-in auto [:wheels 1] * to)
      (update :pos m/mmul (a/scale to))
      (update :ϵ * to)))

(s/fdef auto-scale
  :args (s/cat :scaling ::+ :to-scale ::auto)
  :ret ::auto)

(defn uni->dff [[b d]]
  (* a/rad:s->rpm (/ d) [[2 b] [2 (- b)]]))

(defn dff->uni [[b d]]
  (/ [[0.25 0.25] (/ [0.5 -0.5] b)] a/rad:s->rpm (/ d)))

;PLAN ;unpredictable path. todo: add map
(defn uni-plan [{:keys [kρ kϕ ϵ]} [cmd ρ ϕ]]
  (let [D (if (<= ρ ϵ) 0 1)
        S (- 1 (/ (Math/abs ϕ) π 0.5))
        F (if-not (zero? ϕ) (m/signum ϕ) -1)
        υ (case cmd
            (:goto :avoid) (* kρ ρ)
            :circle (* kρ ϵ))
        ω (case cmd
            :goto (* kϕ ϕ)
            :avoid (* kϕ (- ϕ (* π F)))
            :circle (- (* D (/ υ ρ) F) (* kϕ ϕ S)))]
    [υ ω D S F]))

(s/fdef uni-plan
  :args (s/cat :drive-params ::params :intends (s/spec ::task))
  :ret (s/cat :actuation ::uni
              :danger? (s/or :true #{0 0.0} :false #{1 1.0})
              :side? (s/or :right #{-1 -1.0} :left #{1 1.0})
              :ahead? (s/double-in :min -1 :max 1)))

(defmulti plan (fn [hot _] (-> hot :wheels first)))

(defmethod plan :uni [auto task] (subvec (uni-plan auto task) 0 2))

(defmethod plan :dff [{:keys [kρ kϕ ϵ] :as it} task]
  (let [[υ* ω D* S _] (uni-plan it task)
        D (case (first task)
            :goto (if (neg? S) 0 1)
            :avoid (if (pos? S) 0 1)
            :circle D*)
        υ (case (first task)
            (:goto :avoid) (* D υ* S S)
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
(defn uni-sym [{:keys [yaw pos] :as it} [v w]]
  (let [Δyaw (* w dt)
        yaw* (+ (* Δyaw 0.5) yaw)
        Δpos [(* v dt (m/cos yaw*)) (* v dt (m/sin yaw*)) 0]]
    (-> it (update :pos + Δpos) (update :yaw + Δyaw))))

(s/fdef uni-sym
  :args (s/cat :transform ::body :driver (s/spec ::uni))
  :ret ::body)

(defmulti sym (fn [hot _] (-> hot :wheels first)))

(defmethod sym :uni [auto uni]
  (uni-sym auto uni))

(defmethod sym :dff [auto dff]
  (uni-sym auto (-> auto :wheels (nth 1) dff->uni (m/mmul dff))))

(defmethod sym :car [{[_ l δ] :wheels :as it} [υ s]] ;wip
  (let [Δδ (- (a/constrain s a/π:6) δ) ;cheat
        δ* (+ (* Δδ 0.5) δ)]
    (-> (update-in it [:wheels 2] + Δδ)
        (uni-sym [υ (* υ (/ (m/tan δ*) l))]))))

;COMP
(defn plan+sym [auto [cmd & pos]]
  (->> auto
       (a/detour pos)
       (cons cmd)
       (plan auto)
       (act auto)
       (sym auto)))
