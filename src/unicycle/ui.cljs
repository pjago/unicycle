(ns unicycle.ui
  (:refer-clojure :exclude [+ - * / map cycle])
  (:use [clojure.core.matrix.operators :only [+ - * /]])    ;todo: remove core.matrix
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [common.web :as web]
            [common.math :as a]))

;common
(defn identext [id]
  (list (web/a-entity {:key      "ident"
                       :position [0 0 -0.25]
                       :rotation [90 0 0]
                       :geometry {:primitive 'box
                                  :width     0.01
                                  :height    0.5
                                  :depth     0.01}})
        (web/a-entity {:key      "text"
                       :text     {:value   id
                                  :zOffset 0.5
                                  :align   "center"
                                  :color   'brown
                                  :height  2.0
                                  :width   2.0}
                       :rotation [180 0 180]})))

(defn chassis [size diameter]
  (web/a-entity {:key      "chassis"
                 :position [0 0 (/ size 2)]
                 :rotation [-2.5 90 90]
                 :geometry {:primitive 'box
                            :width     size
                            :height    (+ (/ size 4) diameter)
                            :depth     size}}))

(defn wheel [id diameter yaw position]
  (web/a-entity {:key      (str "wheel " id)
                 :position (+ position [0 0 (/ diameter 2)])
                 :rotation [(- (* a/rad->deg yaw)) 90 180]
                 :material {:color 'black}
                 :geometry {:primitive      'cylinder
                            :radius         (/ diameter 2)
                            :height         (/ diameter 3)
                            :segmentsRadial 9
                            :segmentsHeight 3}}))

;implementations
(defmulti a-cycle first)

(defmethod a-cycle :omni [[_ size]]
  (list (web/a-entity {:key      "chassis"
                       :rotation [180 0 180]
                       :geometry {:primitive 'circle
                                  :radius    size}})))

(defmethod a-cycle :uni [[_ size]]
  (list (chassis size (/ size 3))
        (wheel 0 (/ size 1.8) 0 [0 0 0])))

(defmethod a-cycle :dff [[_ [base diameter]]]
  (list (chassis base diameter)
        (wheel 0 diameter 0 (* base [0 0.5 0]))
        (wheel 1 diameter 0 (* base [0 -0.5 0]))))

(defmethod a-cycle :car [[_ size w-yaw]]
  (list (chassis size (/ size 3))
        (wheel 0 (/ size 3) w-yaw (* size [0.25 0.5 0]))
        (wheel 1 (/ size 3) 0 (* size [-0.25 0.0 0]))
        (wheel 2 (/ size 3) w-yaw (* size [0.25 -0.5 0]))))

;components
(defui Auto
  static om/Ident
  (ident [this props]
    [:entities/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :position :yaw :wheels])
  Object
  (render [this]
    (let [{:keys [id yaw position wheels]} (om/props this)]
      (apply web/a-entity {:key      id
                           :position position
                           :rotation [0 0 (* a/rad->deg yaw)]}
        (concat (a-cycle wheels)
                (identext id))))))

(def auto (om/factory Auto {:keyfn :id}))
