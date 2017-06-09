(ns unicycle.socket)

#?(:cljs (enable-console-print!))

(defmulti event :id)

(defmethod event :chsk/recv [{:keys [?data]}]
  ;(println "Received:" ?data)
  (if (= (first ?data) :query/remote)
    (last ?data)))

(defmethod event :query/remote [{:keys [?data]}]
  ;(println "Query:" ?data)
  ?data)

(defmethod event :chsk/ws-ping [{uid :uid {url :remote-addr} :ring-req}]
  (println "Socket ping!" url uid))

(defmethod event :chsk/state [{:keys [?data]}]
  (if (:ever-opened? (last ?data))
    (println "Channel socket successfully established!")
    (println "Channel socket problem!" \newline ?data)))

(defmethod event :chsk/handshake [{:keys [?data]}]
  (println "Handshake:" ?data)
  {:uid (first ?data)})

(defmethod event :chsk/uidport-open [{uid :uid {url :remote-addr} :ring-req}]
  (println "New connection:" url uid)
  [`(entity/new)])

(defmethod event :chsk/uidport-close [{:keys [uid]}]
  (println "Disconnected:" uid)
  [`(entity/delete)])

(defmethod event :default [{e :event}]
  (println "Unhandled event: %s" e))