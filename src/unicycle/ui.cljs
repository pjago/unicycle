(ns unicycle.ui
  (:refer-clojure :exclude [+ - * / cycle])
  (:use [clojure.core.matrix.operators :only [+ - * /]])    ;todo: core.matrix -> common.math
  (:require-macros [unicycle.ui :refer [deftag defhot]])
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [common.web :as web :refer-macros [a-entity]]
            [common.math :as a]))

;common
(defn tag [{id :tag}]
  (a-entity {:key "tag"}
    (a-entity {:key      "pole"
               :position [0 0 -0.25]
               :rotation [90 0 0]
               :geometry {:primitive 'box
                          :width     0.01
                          :height    0.5
                          :depth     0.01}})
    (a-entity {:key      "text"
               :text     {:value   id
                          :zOffset 0.5
                          :align   "center"
                          :color   'brown
                          :height  2.0
                          :width   2.0}
               :rotation [180 0 180]})))

(defn chassis [{:keys [size diameter]} & children]
  (a-entity {:key      "chassis"
             :position [0 0 0]
             :rotation [-2.5 90 90]
             :geometry {:primitive 'box
                        :width     size
                        :height    (+ (/ size 2) diameter)
                        :depth     size}}
            children))

(defn wheel [{:keys [number diameter position yaw]}]
  (a-entity {:key      (str "wheel " number)
             :position (+ position [0 0 (/ diameter 2)])
             :rotation [(- (* a/rad->deg yaw)) 90 180]
             :material {:color 'black}
             :geometry {:primitive      'cylinder
                        :radius         (/ diameter 2)
                        :height         (/ diameter 3)
                        :segmentsRadial 9
                        :segmentsHeight 3}}))

(defmulti a-cycle (comp first :wheels))

(defmethod a-cycle :omni [{[_ size] :wheels}]
  (a-entity {:key      "chassis"
             :rotation [90 90 90]
             :geometry {:primitive 'cylinder
                        :height    (* size 0.75)
                        :radius    size}}
    (a-entity {:key      "wheel"
               :position [0 (* size -0.5) 0]
               :rotation [180 0 180]
               :material {:color 'black}
               :geometry {:primitive 'sphere
                          :radius    (/ size 2)}})))

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
(deftag cycle [wheels]
  (a-cycle {:wheels wheels}))

(deftag target [size]
  (a-entity {:key      "target"
             :rotation [180 0 180]
             :material {:opacity 0.3}
             :geometry {:primitive 'circle
                        :radius    size}}))

(defhot entity [position yaw]
  (web/a-entity {:position position
                 :rotation [0 0 (* a/rad->deg yaw)]}
    [cycle
     target]))