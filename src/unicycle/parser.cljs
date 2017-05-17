(ns unicycle.parser
  (:refer-clojure :exclude [+ - * /])
  (:require [om.next :as om]
            [common.math :refer [π τ dt] :as a]
            [unicycle.core :as u])
  (:use [clojure.core.matrix.operators :only [+ - * /]]))

(defmulti read om/dispatch)

(defmethod read :cycles [{:keys [ast query] app :state} key _]
  (let [data @app]
    {:value (om/db->tree query (get data key) data)
     :dynamic (assoc ast :query [:position :yaw :act])
     :static (assoc ast :query [:id :wheels])}))

(defmethod read :default [{app :state} key _]
  (let [data @app]
    (if-let [found (get data key)]
      {:value found}
      {:value :not-found})))

(defmulti mutate om/dispatch)

(defmethod mutate 'mouse/model [{app :state} _ {camera :ref :keys [x y]}]
  {:action
   #(let [r (new js/THREE.Raycaster)
          z (new js/THREE.Plane (new js/THREE.Vector3 0 0 1) -1)
          v (new js/THREE.Vector2
                 (- (* (/ x js/window.innerWidth) 2) 1)
                 (- 1 (* (/ y js/window.innerHeight) 2)))
          cam (-> camera .-object3D .-children (aget 0))
          foo (.setFromCamera r v cam)
          mouse (.intersectPlane (.-ray r) z)]
      (swap! app assoc :mouse [(.-x mouse) (.-y mouse) (.-z mouse)]))})

(defmethod mutate 'position/set [{app :state} _ _]
  {:action
   #(let [{:keys [mouse selected]} @app]
     (when-not (empty? selected)
       (swap! app assoc-in (conj selected :position)
              mouse)))})

(defmethod mutate 'yaw/set [{app :state} _ {Δ :delta}]
  {:action #(swap! app update-in (conj (:selected @app) :yaw) + Δ)})

(defmethod mutate 'app/toggle [{app :state} _ _]
  {:action #(swap! app update :state {:on :off :off :on})})

(defmethod mutate 'mouse/select [{app :state :as env} _ _] ;todo: (:path env)
  {:action
   #(let [] ;todo
     (swap! app assoc :selected [:target]))})

(defmethod mutate 'select/clear [{app :state} _ _]
  {:action #(swap! app assoc :selected nil)})
