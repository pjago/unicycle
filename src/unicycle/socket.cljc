(ns unicycle.socket
  (:require [taoensso.sente.packers.transit :as sente-transit]
            [om.tempid :refer [tempid #?(:cljs TempId)]]
            [om.transit #?@(:cljs [:refer [TempIdHandler]])])
  #?(:clj (:import [com.cognitect.transit ReadHandler]
                   [om.tempid TempId]
                   [om.transit TempIdHandler])))

#?(:cljs (enable-console-print!))

(derive :unicycle.handlers/sente ::query-response)
(derive :unicycle.app/login ::query)
(derive :unicycle.app/main ::query)

#?(:clj
   (defn get-packer []
     (sente-transit/->TransitPacker :json
       {:handlers {TempId (TempIdHandler.)}}
       {:handlers {"om/id" (reify
                             ReadHandler
                             (fromRep [_ id] (TempId. id)))}})))
#?(:cljs
   (defn get-packer []
     (sente-transit/->TransitPacker :json
       {:handlers {TempId (TempIdHandler.)}}
       {:handlers {"om/id" (fn [id] (tempid id))
                   "n" (fn [n] (js/Number n))
                   "ratio" (fn [[n d]] (/ (js/Number n)
                                          (js/Number d)))}})))

(defmulti event :id)

(defmethod event :chsk/recv [{:keys [?data]}]
;  (println "Received:" ?data)
  (if (isa? (first ?data) ::query-response)
    (last ?data)))

(defmethod event ::query [{:keys [?data]}]
;  (println "Query:" ?data)
  ?data)

(defmethod event :chsk/ws-ping [{uid :uid {url :remote-addr} :ring-req}]
  (println "Socket ping!" url uid))

(defmethod event :chsk/state [{:keys [?data]}]
  (if (:ever-opened? (last ?data))
    (println "Socket successfully established!")
    (println "Socket problem!" \newline ?data)))

(defmethod event :chsk/handshake [{:keys [?data]}]
  (println "Handshake:" ?data)
  {:uid (first ?data)})

(defmethod event :chsk/uidport-open [{uid :uid {url :remote-addr} :ring-req}]
  (println "New connection:" url uid)
  `[(tag/new)])

(defmethod event :chsk/uidport-close [{uid :uid {url :remote-addr} :ring-req}]
  (println "Disconnected:" url uid)
  `[(tag/delete)])

(defmethod event :default [{e :event}]
  (println "Unhandled event: %s" e))