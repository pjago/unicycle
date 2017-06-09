(ns unicycle.parser
  (:refer-clojure :exclude [+ - * / read])
  (:use [clojure.core.matrix.operators :only [+ - * /]])
  (:require [om.next.server :as om]
            [common.math :refer [π τ dt] :as a]
            [clojure.core.matrix :as m]
            [unicycle.core :as u]))

(defn watch [{:keys [uid log]} key _]
  (alter log conj [uid key])
  (if (-> @log count (>= 500))
    (alter log (comp vec rest)))
  key)

(def base-cycle                                             ;shouldn't be here
  {:position [0.0 0.0 1.0]
   :yaw      0.0
   :kp       0.5
   :ko       1.0
   :eps      10
   :wheels   [:omni 0.2]
   :engine   (* π [1.0 10.0])
   :children {:target {:position [0.0 0.0 1.0]
                       :yaw      0
                       :size     0.2}}})

(defmulti read watch)

(defmethod read :cycles [{world :lab} _ _]
  {:value (vec (vals @world))})

(defmethod read :default [{world :lab} key _]
  (if-let [found (get @world key)]
    {:value found}
    {:value ::not-found}))

(defmethod read :uid [{id :uid} _ _]
  {:value id})

(defmulti mutate watch)

(defmethod mutate 'entity/act [{:keys [lab uid]} _ {u :value}]
  {:action #(alter lab assoc-in [uid :act] u)})

(defmethod mutate 'refresh/remote [_ _ _])

(defmethod mutate 'entity/merge [{:keys [lab uid]} _ {id :id :as entity}]
  (if (= id uid)
    {:action #(alter lab update uid merge entity)}
    {:action #(alter lab update-in [uid :children id] merge entity)}))

(defmethod mutate 'entity/new [{:keys [lab users url uid]} _ _]
  {:action #(do (alter users update url (fnil conj #{}) uid)
                (alter lab assoc uid (assoc base-cycle :id uid)))})

(defmethod mutate 'entity/delete [{:keys [lab users url uid]} _ _]
  {:action #(do (alter users update url disj uid)
                (alter lab dissoc uid))})

(defmethod mutate 'entity/clear [{:keys [lab users uid]} _ _]
  {:action #(alter lab dissoc uid)})

(defmethod mutate 'uid/set [_ _ _])