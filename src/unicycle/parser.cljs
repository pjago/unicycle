(ns unicycle.parser
  (:refer-clojure :exclude [read])
  (:require [om.next :as om]
            [common.math :refer [π] :as a]))

(defmulti read om/dispatch)

(defmethod read :tags [{:keys [state ast query]} key params]
  (let [{:keys [stream] :as data} @state]
    {:value  (om/db->tree query (get data key) data)
     :remote (or (= stream :on) (= (:target ast) :remote))}))

(defmethod read :default [{app :state} key _]
  (if-let [found (get @app key)]
    {:value found}
    {:value ::not-found}))

(defmethod read :uid [{app :state} _ _]
  (let [uid (:uid @app)]
    (if-not (om/tempid? uid)
      {:value  uid}
      {:value  ::not-found
       :remote true})))

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

(defmethod mutate 'position/set [{:keys [state ast]} _ {:keys [select]}]
  (let [path     (conj select :position)
        position (:mouse @state)]
    {:action #(swap! state assoc-in path position)
     :remote (assoc ast :key 'tag/merge
                        :params {:tag      (peek select)
                                 :position position})}))

(defmethod mutate 'yaw/set [{:keys [state ast]} _ {select :select Δ :delta}]
  (let [path (conj select :yaw)
        yaw  (a/cycle (+ (get-in @state path) Δ) π)]
    {:action #(swap! state assoc-in path yaw)
     :remote (assoc ast :key 'tag/merge
                        :params {:tag (peek select)
                                 :yaw yaw})}))

(defmethod mutate 'stream/toggle [{app :state} _ _]
  {:action #(swap! app update :stream {:on :off :off :on})
   :remote true})

(defmethod mutate 'select/mouse [{app :state} _ _]
  (let [{:keys [mouse] :as data} @app
        it (->> (om/db->tree [:type :tag :position] (:tags data) data)
                (into [] (a/closest :position mouse))
                (peek)
                ((juxt :type :tag)))]
    {:action #(swap! app assoc :select it)}))

(defmethod mutate 'select/menu [{app :state} _ _]
  (let [it [:window/menu "_menu"]]
    {:action #(swap! app assoc :select it)}))

(defmethod mutate 'uid/set [{:keys [state ast]} _ {name :tag}]
  (let [uid (:uid @state)]
    (when (om/tempid? uid)
      {:action #(swap! state assoc :client-id name)
       :remote (update ast :params assoc :tempid uid)})))