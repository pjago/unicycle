(ns unicycle.parser
  (:refer-clojure :exclude [+ - * / read])
  (:require [om.next :as om]
            [common.math :refer [π τ dt] :as a]
            [clojure.core.matrix :as m])
  (:use [clojure.core.matrix.operators :only [+ - * /]]))

(defmulti read om/dispatch)

(defmethod read :cycles [{:keys [ast query] app :state} key _]
  (let [{:keys [state] :as data} @app]
    {:value  (om/db->tree query (get data key) data)
     :remote (if (= state :on) (assoc ast :query [:id :position :yaw :act]))
     :static (assoc ast :query [:wheels])}))

(defmethod read :default [{app :state} key _]
  (if-let [found (get @app key)]
    {:value found}
    {:value ::not-found}))

(defmethod read :uid [{app :state} _ _]
  (if-let [found (:uid @app)]
    {:value found}
    {:value ::not-found
     :remote true}))

(defmulti mutate om/dispatch)

(defmethod mutate 'refresh/remote [{app :state} _ _]
  (if (= (:state @app) :on)
    {:remote true}))

(defmethod mutate 'mouse/model [{app :state} _ {camera :ref :keys [x y]}]
  {:action #(let [r   (new js/THREE.Raycaster)
                  z   (new js/THREE.Plane (new js/THREE.Vector3 0 0 1) -1)
                  v   (new js/THREE.Vector2
                           (- (* (/ x js/window.innerWidth) 2) 1)
                           (- 1 (* (/ y js/window.innerHeight) 2)))
                  cam (-> camera .-object3D .-children (aget 0))]
              (.setFromCamera r v cam)
              (as-> (.intersectPlane (.-ray r) z) mouse
                    [(.-x mouse) (.-y mouse) (.-z mouse)]
                    (swap! app assoc :mouse mouse)))})

(defmethod mutate 'position/set [{:keys [ast] app :state} _ _]
  (let [{:keys [select mouse] :as data} @app]
    (if-not (empty? select)
      (let [path (conj select :position)]
        {:action #(swap! app assoc-in path mouse)
         :remote (assoc ast :key    'entity/merge
                            :params {:id       (peek select)
                                     :position mouse})}))))

(defmethod mutate 'yaw/set [{:keys [ast] app :state} _ {Δ :delta}]
  (let [{:keys [select] :as data} @app]
    (if-not (empty? select)
      (let [path (conj select :yaw)
            yaw  (a/cycle (+ (get-in data path) Δ) π)]
        {:action #(swap! app assoc-in path yaw)
         :remote (assoc ast :key    'entity/merge
                            :params {:id  (peek select)
                                     :yaw yaw})}))))

(defmethod mutate 'state/toggle [{app :state} _ _]
  {:action #(swap! app update :state {:on :off :off :on})})

(defmethod mutate 'select/mouse [{app :state} _ _]
  {:action #(let [{:keys [state uid] :as data} @app]
              (if (= state :off)
                (swap! app assoc :select [:entities/by-id uid])
                (swap! app assoc :select [:target])))})

(defmethod mutate 'select/clear [{app :state} _ _]
  {:action #(swap! app assoc :select nil)})

(defmethod mutate 'uid/set [{app :state} _ {name :value}]
  {:action #(swap! app assoc :client-id name)
   :remote (nil? (:uid @app))})