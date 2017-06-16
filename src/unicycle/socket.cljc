(ns unicycle.socket)

#?(:cljs (enable-console-print!))

(derive :unicycle.handlers/sente ::query-response)
(derive :unicycle.app/login ::query)
(derive :unicycle.app/main ::query)

(def base-cycle                                             ;unicycle specific
  {:tag      ""
   :type     :entity/cycle
   :position [0.0 0.0 1.0]
   :yaw      0.0
   :kp       0.5
   :ko       1.0
   :eps      10
   :wheels   [:omni 0.2]
   :engine   [3 30]})

(def base-target                                            ;unicycle specific
  {:tag      "target"
   :type     :entity/target
   :position [1.0 1.0 1.0]
   :yaw      0
   :size     0.2})

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
  `[(entity/new ~(assoc base-cycle :tag uid))
    (entity/new ~base-target)])

(defmethod event :chsk/uidport-close [{uid :uid {url :remote-addr} :ring-req}]
  (println "Disconnected:" url uid)
  `[(entity/delete)])

(defmethod event :default [{e :event}]
  (println "Unhandled event: %s" e))