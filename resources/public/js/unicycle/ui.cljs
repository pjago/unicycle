(ns unicycle.ui
  (:refer-clojure :exclude [+ - * /])
  (:require [goog.dom :as gdom]
            [goog.events :as events]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [common.math :refer [π τ dt] :as a]
            [common.web :as web]
            [unicycle.core :as u])
  (:use [clojure.core.matrix.operators :only [+ - * /]]))

(def auto
  {:pos [0 0 1]
   :yaw 0
   :wheels [:uni 0.2]
   :engine (* a/π [1 10])
   :kρ 2 :kϕ 4 :ϵ 0.2}) ;todo: normalize drop

(def init-data
  {:cycles [auto
            (assoc auto :wheels [:dff [0.2 0.1]] :engine [600 600])
            (assoc auto :wheels [:car 0.2 0])]
   :cmd (cycle [:goto :circle :avoid])
   :mouse [0 0 1] :drop 0.2})

(defn chassis [size diameter]
  (let [height (+ (/ size 4) diameter)]
    (web/a-entity {:position [0 0 (/ size 2)]
                   :rotation [-2.5 90 90]
                   :geometry {:primitive 'box
                              :width size
                              :height height
                              :depth size}})))

(defn wheel [diameter yaw position]
  (web/a-entity {:position (+ position [0 0 (/ diameter 2)])
                 :rotation [(- (* a/rad->deg yaw)) 90 180]
                 :material {:color 'black}
                 :geometry {:primitive 'cylinder
                            :radius (/ diameter 2)
                            :height (/ diameter 3)}}))

(defmulti a-cycle (comp first :wheels))

(defmethod a-cycle :uni [{:keys [yaw pos] [type size] :wheels}]
  (web/a-entity {:key type :position pos :rotation [0 0 (* a/rad->deg yaw)]}
    (chassis size (/ size 3))
    (wheel (/ size 1.8) 0 [0 0 0])))

(defmethod a-cycle :dff [{:keys [yaw pos] [type [base diam]] :wheels}]
  (web/a-entity {:key type :position pos :rotation [0 0 (* a/rad->deg yaw)]}
    (chassis base diam)
    (wheel diam 0 (* base [0  0.5 0]))
    (wheel diam 0 (* base [0 -0.5 0]))))

(defmethod a-cycle :car [{:keys [yaw pos] [type size w-yaw] :wheels}]
  (web/a-entity {:key type :position pos :rotation [0 0 (* a/rad->deg yaw)]}
    (chassis size (/ size 3))
    (wheel (/ size 3) w-yaw (* size [ 0.25  0.5 0]))
    (wheel (/ size 3) 0     (* size [-0.25  0.0 0]))
    (wheel (/ size 3) w-yaw (* size [ 0.25 -0.5 0]))))

(defui App
  static om/IQuery
  (query [this]
    [:cycles :mouse :drop])
  Object
  (render [this]
    (let [{:keys [cycles mouse drop zoom]} (om/props this)]
      (dom/div #js{:style #js{:width "100%"}}
        (dom/h1 #js{:style #js{:position "absolute" :zIndex -1}} "Unicycle")
        (apply web/a-scene {:id "scene"
                            :key :scene
                            :inspector {:url "https://aframe.io/releases/0.3.0/aframe-inspector.min.js"}}
          (web/a-entity {:id "camera"
                         :key :camera-with-cursor
                         :position [0 0 -5]
                         :rotation [180 0 180]
                         :camera {:active true :zoom 2}
                         :wasd-controls "adInverted: true; wsInverted: true"})
          (web/a-entity {:id "drop"
                         :key :drop-shadow
                         :position mouse
                         :rotation [180 0 180]
                         :geometry {:primitive 'circle :radius (/ drop 2)}})
          (map a-cycle cycles))))))

(defonce app-state
  (atom (om/tree->db App init-data true)))

(defn read [{:keys [state query] :as env} key params]
  (let [st @state]
    (if-let [value (get st key)]
      {:value value}
      {:value :not-found})))

(defmulti mutate om/dispatch)

(defmethod mutate 'move [{:keys [state query ref] :as env} key params]
  {:action
   #(let [r (new js/THREE.Raycaster)
          z (new js/THREE.Plane (new js/THREE.Vector3 0 0 1) -1)
          v (new js/THREE.Vector2
                 (- (* (/ (:clientX params) js/window.innerWidth) 2) 1)
                 (- 1 (* (/ (:clientY params) js/window.innerHeight) 2)))
          cam (-> "camera" gdom/getElement .-object3D .-children (aget 0))
          foo (.setFromCamera r v cam)
          pos (.intersectPlane (.-ray r) z)]
      (swap! app-state assoc :mouse [(.-x pos) (.-y pos) (.-z pos)]))})

(defmethod mutate 'wheel [{:keys [state query ref] :as env} key params]
  {:action
   #(let [Δ (* -0.0002 (:deltaY params))
          n (count (:cycles @app-state))]
     (swap! app-state update :drop + Δ)
     (swap! app-state update :zoom + (* 100 Δ))
     (dotimes [i n] ;todo: normalize drop
       (swap! app-state update-in [:cycles i :kρ] + (* Δ 10))
       (swap! app-state update-in [:cycles i :kϕ] + (* Δ 20))
       (swap! app-state update-in [:cycles i :ϵ] + Δ)))})

(defmethod mutate 'click [{:keys [state query ref] :as env} key params]
  {:action #(swap! app-state update :cmd rest)})

(def parser (om/parser {:read read :mutate mutate}))

(defonce reconciler
  (om/reconciler
    {:logger nil
     :state app-state
     :parser parser}))

(om/add-root! reconciler App (gdom/getElement "app"))

(events/listen (gdom/getElement "app") "mousemove"
  (fn [e] (om/transact! reconciler
            `[(~'move {:clientX ~e.clientX :clientY ~e.clientY}) :mouse])))

(events/listen (gdom/getElement "app") "click"
  (fn [_] (om/transact! reconciler '[(click)])))

(events/listen (gdom/getElement "app") "mousewheel"
  (fn [e] (om/transact! reconciler
            `[(~'wheel {:deltaY ~e.event_.deltaY}) :drop :cycles])))

(defonce rafid (atom nil))
(defn start-raf []
  (defn loop-raf []
    (reset! rafid (.requestAnimationFrame js/window loop-raf))
    (doseq [i [0 1 2] :let [st @app-state]]
      (swap! app-state update-in [:cycles i] u/plan+sym
             (cons (first (:cmd st)) (:mouse st)))))
  (reset! rafid (.requestAnimationFrame js/window loop-raf)))
(.cancelAnimationFrame js/window @rafid)
(start-raf)
