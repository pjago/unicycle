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
                          :color   'gray
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

(defn wheel [{:keys [number diameter position yaw] :or {yaw 0}}]
  (a-entity {:key      (str "wheel " number)
             :position (+ position [0 0 (/ diameter 2)])
             :rotation [(- yaw) 90 180]
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
    (a-entity {:key      "rotation"
               :rotation [-90 -90 -90]}
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
              :yaw      150}))))

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
                        :radius    size}}
    (a-entity {:key      "rotate"
               :rotation [-180 0 -180]}
      (tag {:tag "-o>"}))))

(defhot entity2d [position yaw]
  (web/a-entity {:position position
                 :rotation [0 0 (* a/rad->deg yaw)]}
    [cycle
     target]))

(comment
  (deftag menu [keys vals])
  ;etc
  (dehot window [position]
    (let [[right top z-index] position
          style #js{:position "absolute"
                    :right    right
                    :top      top
                    :zIndex   z-index}]
      (dom/div #js{:style style}
        (if minimize ;local state
          ;etc
          [menu])))))