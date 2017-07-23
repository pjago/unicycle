(ns unicycle.ui
  (:refer-clojure :exclude [+ - * / cycle])
  (:use [clojure.core.matrix.operators :only [+ - * /]])    ;todo: core.matrix -> common.math
  (:require [unicycle.tags #?(:cljs :refer-macros :clj :refer) [deftag]]
            [unicycle.parser :as p :refer [grammar mutate]]
            [common.web :as web :refer [a-entity]]
            [common.cljc :as cljc] ; alter-var-root should really be at parser
            [common.math :as a]))

;common
(defn tag-pole [{id :tag}]
  (a-entity {:key      "tag"
             :text     {:value   id
                        :zOffset 0.5
                        :align   "center"
                        :color   'gray
                        :height  2.0
                        :width   2.0}
             :rotation [180 0 180]}
            (a-entity {:key      "pole"
                       :position [0 0 0.25]
                       :rotation [-90 0 -180]
                       :geometry {:primitive 'box
                                  :width     0.01
                                  :height    0.5
                                  :depth     0.01}})))

(defn chassis [{:keys [size diameter]} & children]
  (a-entity {:key      "chassis"
             :position [0 0 0]
             :rotation [90 90 90]
             :geometry {:primitive 'cylinder
                        :height    (+ (* size 0.75) diameter)
                        :radius    (/ size 2)}}
            children))

(defn wheel [{:keys [number diameter position yaw] :or {yaw 0}}]
  (a-entity {:key      (str "wheel " number)
             :position (+ position [0 0 (/ diameter 2)])
             :rotation [(- yaw) 0 90]
             :material {:color 'black}
             :geometry {:primitive      'cylinder
                        :radius         (/ diameter 2)
                        :height         (/ diameter 3)
                        :segmentsRadial 9
                        :segmentsHeight 3}}))

(defmulti a-cycle (comp first :wheels))

(defmethod a-cycle :omni [{[_ size] :wheels}]
  (chassis {:size     size
            :diameter (* 0.65 size)}
           (wheel {:number   0
                   :diameter (* 0.65 size)
                   :position (* size [1     0     -0.6] 0.92)
                   :yaw      90})
           (wheel {:number   1
                   :diameter (* 0.65 size)
                   :position (* size [-0.5  0.866 -0.6] 0.92)
                   :yaw      30})
           (wheel {:number   2
                   :diameter (* 0.65 size)
                   :position (* size [-0.5 -0.866 -0.6] 0.92)
                   :yaw      150})))

(defmethod a-cycle :uni [{[_ size] :wheels}]
  (chassis {:size     size
            :diameter (/ size 3)}
           (wheel {:number   0
                   :diameter (/ size 1.8)
                   :position [0 0 0]
                   :yaw      0})))

(defmethod a-cycle :dff [{[_ [base diameter]] :wheels}]
  (chassis {:size     base
            :diameter diameter}
           (wheel {:number   0
                   :diameter diameter
                   :position (* base [0 0.5 0])
                   :yaw      0})
           (wheel {:number   1
                   :diameter diameter
                   :position (* base [0 -0.5 0])
                   :yaw      0})))

(defmethod a-cycle :car [{[_ size w-yaw] :wheels}]
  (chassis {:size     size
            :diameter (/ size 3)}
           (wheel {:number   0
                   :diameter (/ size 3)
                   :position (* size [0.25 0.5 0])
                   :yaw      w-yaw})
           (wheel {:number   1
                   :diameter (/ size 3)
                   :position (* size [-0.25 0.0 0])
                   :yaw      0})
           (wheel {:number   2
                   :diameter (/ size 3)
                   :position (* size [0.25 -0.5 0])
                   :yaw      w-yaw})))

;tags
(deftag position [x y z & children]
  (a-entity {:position [x y z]}
            children))

(deftag rotation [yaw & children]
  (a-entity {:rotation [0 0 (* a/rad->deg yaw)]}
            children))

(deftag wheels [type size]
  (a-cycle {:wheels [type size]}))

(deftag target [size]
  (a-entity {:rotation [180 0 180]
             :material {:opacity 0.3}
             :geometry {:primitive 'circle
                        :radius    (/ size 2)}}
            (a-entity {:rotation [-180 0 -180]}
                      (tag-pole {:tag "-o>"}))))

(deftag a-style [transform & children]
  (reduce-kv #(-> (case %2
                    :translate  {:position %3}
                    :rotateX    {:rotation [%3 0 0]}
                    :rotateY    {:rotation [0 %3 0]}
                    :rotateZ    {:rotation [0 0 %3]}
                    :scale      {:scale    %3}
                    :translateX {:position [%3 0 0]}
                    :translateY {:position [0 %3 0]}
                    :translateZ {:position [0 0 %3]})
                  (a-entity %1))
             children
             transform))

(defn get-read-handler []
  {"position" PositionReader
   "rotation" RotationReader
   "wheels"   WheelsReader
   "target"   TargetReader})

(defn get-write-handler []
  {Position# PositionWriter
   Rotation# RotationWriter
   Wheels#   WheelsWriter
   Target#   TargetWriter})
;idea: (derive ::d3/position ::d2/position)
(cljc/alter-var-root #'grammar
  #(-> (derive % ::position ::p/components)
       (derive   ::rotation ::p/components)
       (derive   ::wheels   ::p/components)
       (derive   ::target   ::p/components)))

(defn drag [tag mouse]
  [`(drag {:tag ~tag :to ~(->Position# (.-x mouse) (.-y mouse) (.-z mouse))})
   [::position tag]])

(defn spin [tag event]
  [`(spin {:tag ~tag :delta ~(* 0.0015708 (.-deltaY event))})
   [::rotation tag]])

(defmethod mutate `drag [{:keys [state] :as env} _ {$ :tag new :to}]
  (mutate env 'tag/assoc {:tag $ :value new}))

(defmethod mutate `spin [{:keys [state ast] :as env} _ {$ :tag Δ :delta}]
  (let [path [::rotation $]
        old  (get-in @state path)
        yaw  (a/cycle (+ (:yaw old) Δ) a/π)
        new  (assoc old :yaw yaw)]
    (mutate env 'tag/assoc {:tag $ :value new})))