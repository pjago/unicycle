(ns unicycle.socket
  (:require [taoensso.sente.packers.transit :as sente-transit]
            [om.tempid :refer [tempid #?(:cljs TempId)]]
            [om.transit #?@(:cljs [:refer [TempIdHandler]])]
            [unicycle.ui :refer [get-write-handler get-read-handler]])
  #?(:clj (:import [com.cognitect.transit WriteHandler ReadHandler]
                   [om.tempid TempId]
                   [om.transit TempIdHandler])))

#?(:cljs (enable-console-print!))

#?(:clj
   (defn get-packer []
     (sente-transit/->TransitPacker :json
       {:handlers (merge (get-write-handler)
                         {TempId (TempIdHandler.)})}
       {:handlers (merge (get-read-handler)
                         {"om/id" (reify ReadHandler
                                    (fromRep [_ id] (TempId. id)))})})))
#?(:cljs
   (defn get-packer []
     (sente-transit/->TransitPacker :json
       {:handlers (merge (get-write-handler)
                         {TempId (TempIdHandler.)})}
       {:handlers (merge (get-read-handler)
                         {"om/id" (fn [id] (tempid id))
                          "n" (fn [n] (js/Number n))
                          "ratio" (fn [[n d]] (/ (js/Number n)
                                                 (js/Number d)))})})))

(derive :unicycle.handlers/sente ::query-response)
(derive :unicycle.app/login ::query)
(derive :unicycle.app/main ::query)

(defmulti event :id)

(defmethod event :chsk/recv [{:keys [?data]}]
  (println "Received:" ?data)
  (if (isa? (first ?data) ::query-response)
    (last ?data)))

(defmethod event ::query [{:keys [?data]}]
  (println "Query:" ?data)
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
  (println "Unhandled event:" e))