(ns unicycle.app
  (:refer-clojure :exclude [+ - * /])
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [common.math :refer [π τ dt] :as a]
            [common.web :as web]
            [unicycle.core :as u]
            [unicycle.parser :as parser]
            [clojure.spec.alpha :as s]
            [taoensso.sente :as sente :refer (cb-success?)])
  (:use [clojure.core.matrix.operators :only [+ - * /]]))

(enable-console-print!)

(s/def ::state #{:on :off})

;data
(def init-data
  {:state :off
   :cycles []
   :selected []
   :mouse [0.0 0.0 1.0]
   :target {:position [0.0 0.0 1.0]
            :yaw 0.0
            :size 0.2}})

;common ui
(defn toggle [this state]
  (dom/div #js{:style #js{:position "relative" :float "right" :zIndex 1}}
    (dom/button #js{:onClick #(om/transact! this ['(app/toggle) :state])}
                (case state :on "ON" :off "OFF"))))

(defn chassis [size diameter]
  (web/a-entity {:position [0 0 (/ size 2)]
                 :rotation [-2.5 90 90]
                 :geometry {:primitive 'box
                            :width size
                            :height (+ (/ size 4) diameter)
                            :depth size}}))

(defn wheel [diameter yaw position]
  (web/a-entity {:position (+ position [0 0 (/ diameter 2)])
                 :rotation [(- (* a/rad->deg yaw)) 90 180]
                 :material {:color 'black}
                 :geometry {:primitive 'cylinder
                            :radius (/ diameter 2)
                            :height (/ diameter 3)
                            :segmentsRadial 9
                            :segmentsHeight 3}}))

;auto ui
(defmulti a-cycle (comp first :wheels))

(defui Auto
  static om/Ident
  (ident [this props]
    [:cycles/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :position :yaw :wheels :act :target])
  Object
  (render [this]
    (a-cycle (om/props this))))

(def auto (om/factory Auto {:key-fn :id}))

(defmethod a-cycle :uni [{:keys [id yaw position] [_ size] :wheels}]
  (web/a-entity {:key id :position position :rotation [0 0 (* a/rad->deg yaw)]}
    (web/a-entity {:text {:value id :zOffset 1 :align "center" :color 'black :height 2.0 :width 2.0}
				   :rotation [180 0 180]})
	(web/a-entity {:position [0 0 -0.5] :rotation [90 0 0] :geometry {:primitive 'box :width 0.01 :height 1 :depth 0.01}})
	(chassis size (/ size 3))))
    ;(wheel (/ size 1.8) 0 [0 0 0])))

(defmethod a-cycle :dff [{:keys [id yaw position] [_ [base diameter]] :wheels}]
  (web/a-entity {:key id :position position :rotation [0 0 (* a/rad->deg yaw)]}
    (chassis base diameter)
    (wheel diameter 0 (* base [0  0.5 0]))
    (wheel diameter 0 (* base [0 -0.5 0]))))

(defmethod a-cycle :car [{:keys [id yaw position] [_ size w-yaw] :wheels}]
  (web/a-entity {:key id :position position :rotation [0 0 (* a/rad->deg yaw)]}
    (chassis size (/ size 3))
    (wheel (/ size 3) w-yaw (* size [ 0.25  0.5 0]))
    (wheel (/ size 3) 0     (* size [-0.25  0.0 0]))
    (wheel (/ size 3) w-yaw (* size [ 0.25 -0.5 0]))))

;App events
(declare app-state)

(defn mouse-model [e]
  [`(mouse/model {:x ~e.clientX
                  :y ~e.clientY
                  :ref ~(gdom/getElement "camera")})
    :mouse])

(defn select-clear [_]
  [`(select/clear) :selected])

(defn mouse-select [_]
  [`(mouse/select) :selected])

(defn position-set [_]
  [`(position/set) :selected])

(defn yaw-set [e]
  [`(yaw/set {:delta ~(* -0.0002 e.deltaY)})
   :selected])

;App ui
(defui App
  static om/IQuery
  (query [this]
    [:state :mouse :target {:cycles (om/get-query Auto)}])
  Object
  (render [this]
    (let [{:keys [state mouse target cycles]} (om/props this)]
      (dom/div #js{:style #js{:height "100vh" :width "100vh"}
                   :onMouseDown #(om/transact! this (mouse-select %))
                   :onMouseUp #(om/transact! this (select-clear %))
                   :onWheel #(om/transact! this (yaw-set %))
                   :onMouseMove #(do (om/transact! this (mouse-model %))
                                     (om/transact! this (position-set %)))}
        ;(toggle this state)
        (apply web/a-scene {:id "scene"
                            :key :scene
							:inspector "url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js"}
          (web/a-entity {:id "camera"
                         :key :camera
                         :position [0 0 -5]
                         :rotation [180 0 180]
                         :camera {:active true :zoom 2}
                         :wasd-controls "adInverted: true; wsInverted: true"})
          (web/a-entity {:id "target"
                         :key :target
                         :position (:position target)
                         :rotation [180 0 180]
                         :material {:opacity 0.3}
                         :geometry {:primitive 'circle
                                    :radius (:size target)}})
          (map auto cycles))))))

;sente
(defn merge-novelty [state by-id] ;todo: it more efficiently
  (-> state
      (assoc :cycles (mapv vector (repeat :cycles/by-id) (keys by-id)))
      (assoc :cycles/by-id by-id)))

(defonce channel-socket
  (sente/make-channel-socket! "/chsk" {:type :auto}))

(defonce chsk (:chsk channel-socket))
(defonce ch-chsk (:ch-recv channel-socket))
(defonce chsk-send! (:send-fn channel-socket))
(defonce chsk-state (:state channel-socket))

(defmulti event-msg-handler :id)

(defmethod event-msg-handler :default [{:keys [event]}]
  (println "Unhandled event: %s" event))

(defmethod event-msg-handler :chsk/state [{:keys [?data]}]
  (if (:ever-opened? (last ?data))
    (println "Channel socket successfully established!")
    (println "Channel socket problem!" \newline ?data)))

(defmethod event-msg-handler :chsk/handshake [{:keys [uid ?data]}]
  (println "Handshake:" ?data)
  (swap! app-state assoc :id uid)
  (chsk-send! [:cycle/name :marco]))

(defmethod event-msg-handler :chsk/recv [{:keys [?data]}]
  (swap! app-state merge-novelty (last ?data))
  (chsk-send! [:cycle/target (:target @app-state)]))

(defonce router
  (sente/start-client-chsk-router! ch-chsk event-msg-handler))

;om.next
(set! om/*raf* (fn [f] (f) (set! om/*raf* nil)))

(defonce app-state
  (atom (om/tree->db App init-data true)))

(def parser (om/parser {:read parser/read :mutate parser/mutate}))

(defonce reconciler
  (om/reconciler
    {:logger nil
     :state app-state
     :parser parser}))

(om/add-root! reconciler App (gdom/getElement "app"))
