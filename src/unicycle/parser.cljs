(ns unicycle.parser                                         ;todo: remove cycle specifics
  (:refer-clojure :exclude [read])
  (:require [om.next :as om]
            [common.math :refer [π] :as a]))

(defmulti read om/dispatch)

(defmethod read :entities [{:keys [ast query] app :state} key params]
  (let [{:keys [state] :as data} @app]
    {:value  (om/db->tree query (get data key) data)
     :remote (or (= state :on) (some? params))}))

(defmethod read :default [{app :state} key _]
  (if-let [found (get @app key)]
    {:value found}
    {:value ::not-found}))

(defmethod read :uid [{app :state} _ _]
  (if-let [found (:uid @app)]
    {:value  found}
    {:value  ::not-found
     :remote true}))

(defmulti mutate om/dispatch)

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

(defmethod mutate 'position/set [{:keys [ast] app :state} _ {:keys [select]}]
  (let [path     (conj select :position)
        position (:mouse @app)]
    {:action #(swap! app assoc-in path position)
     :remote (assoc ast :key 'entity/merge
                        :params {:tag      (peek select)
                                 :position position})}))

(defmethod mutate 'yaw/set [{:keys [ast] app :state} _ {select :select Δ :delta}]
  (let [path (conj select :yaw)
        yaw  (a/cycle (+ (get-in @app path) Δ) π)]
    {:action #(swap! app assoc-in path yaw)
     :remote (assoc ast :key 'entity/merge
                        :params {:tag (peek select)
                                 :yaw yaw})}))

(defmethod mutate 'state/toggle [{app :state} _ _]
  {:action #(swap! app update :state {:on :off :off :on})
   :remote true})

(defmethod mutate 'select/mouse [{app :state} _ _]
  (let [{:keys [state mouse] :as data} @app
        it (->> (om/db->tree [:type :tag :position] (:entities data) data)
                (into [] (a/closest :position mouse))
                (peek)
                ((juxt :type :tag)))]
    {:action #(swap! app assoc :select it)}))

(defmethod mutate 'select/menu [{app :state} _ _]
  (let [it [:entity/menu "_menu"]]
    {:action #(swap! app assoc :select it)}))

(defmethod mutate 'uid/set [{app :state} _ {name :value}]
  {:action #(swap! app assoc :client-id name)
   :remote (nil? (:uid @app))})