(ns unicycle.parser
  (:refer-clojure :exclude [+ - * / read])
  (:use [clojure.core.matrix.operators :only [+ - * /]])
  (:require [om.next.server :as om]
            [common.math :refer [π τ dt] :as a]
            [clojure.core.matrix :as m]
            [unicycle.core :as u]))

(defn watch [{:keys [uid log]} key params]
  (when-not (and (nil? params) (= key :entities))
    (alter log conj [uid key])
    (if (-> @log count (>= 500))
      (alter log (comp vec rest))))
  key)

(defmulti read watch)

(defmethod read :entities [{world :state} _ {:keys [only]}]
  {:value (if (some? only)
            (select-keys @world only)
            @world)})

(defmethod read :default [{world :state} key _]
  (if-let [found (get @world key)]
    {:value found}
    {:value ::not-found}))

(defmethod read :uid [{id :uid} _ _]
  {:value id})

(defmulti mutate watch)

(defmethod mutate 'entity/act [{:keys [state uid]} _ {u :value}]
  {:action #(alter state assoc-in [uid :act] u)})

(defmethod mutate 'entity/merge [{:keys [state tags url uid]} _ {tag :tag :as entity}]
  (if (or (nil? tag) (= uid tag))
    {:action #(alter state update uid merge entity)}
    {:action #(when (-> @tags (get url) (get tag))
                (alter tags update uid (fnil conj #{}) tag)
                (alter state update tag merge entity))}))

(defmethod mutate 'entity/new [{:keys [state tags url uid]} _ {tag :tag :as entity}]
  (let [?id (or tag uid)]
    {:action #(do (alter tags update url (fnil conj #{}) ?id)
                  (alter tags update uid (fnil conj #{}) tag)
                  (alter tags update ?id (fnil conj #{}) ?id)
                  (alter state assoc ?id (assoc entity :tag ?id)))}))

(defmethod mutate 'entity/delete [{:keys [state tags url uid]} _ _]
  {:action #(let [data @tags]
              (doseq [tag (get data uid)]
                (alter tags update tag disj uid))
              (alter state dissoc uid)
              (alter tags dissoc uid)
              (alter tags update url disj uid))})

(defmethod mutate 'entity/clear [{:keys [state tags uid]} _ _]
  {:action #(alter state assoc uid {:tag uid})})

(defmethod mutate 'state/toggle [_ _ _])

(defmethod mutate 'uid/set [_ _ _])