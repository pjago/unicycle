(ns unicycle.app
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [om.next :refer [defui]])
  (:require [unicycle.ui :as ui]
            [unicycle.parser :as p]
            [unicycle.socket :refer [event get-packer]]
            [common.web :as web]
            [goog.dom :as gdom]
            [om.next :as om :refer [transact!] :rename {transact! !}]
            [om.dom :as dom]
            [cljs.core.async :as async :refer [put! take! <! >!]]
            [taoensso.sente :as sente :refer [make-channel-socket-client!]]))

;data
(defonce init-data
  (let [uid    (om/tempid "_user")
        -cycle {:type     :entity2d/cycle
                :position [0.0 0.0 1.0]
                :yaw      0.0
                :wheels   [:omni 0.2]
                :engine   [3 30]}
        target {:type     :entity2d/target
                :position [1.0 1.0 1.0]
                :yaw      -2.356
                :size     0.2}]
    {:uid             uid
     :stream          :on                                              ;#{:on :off}
     :mouse           [0.0 0.0 1.0]
     :select          [:window/menu "_menu"]
     :tags            [[:entity2d/cycle  uid]
                       [:entity2d/target uid]
                       [:entity2d/target "target"]]
     :entity2d/cycle  {uid      (assoc -cycle :tag uid)}
     :entity2d/target {uid      (assoc target :tag uid)
                       "target" (assoc target :tag "target")}
     ::om/tables      #{:entity2d/target
                        :entity2d/cycle}}))

(declare app-state)

;actions
(defn stream-toggle [_]
  [`(stream/toggle)
   :stream])

(defn mouse-model [e]
  [`(mouse/model {:x   ~e.clientX
                  :y   ~e.clientY
                  :ref ~(gdom/getElement "camera")})
   :mouse])

(defn select-mouse []
  [`(select/mouse)
   :select])

(defn select-menu []
  [`(select/menu)
   :select])

(defn position-set [s]
  [`(position/set {:select ~s})])

(defn yaw-set [s e]
  [`(yaw/set {:select ~s
              :delta  ~(* 0.0015708 e.deltaY)})])

(defn uid-set
  ([name] [`(uid/set {:tag ~name})
           :uid])
  ([name e] (if (= e.key "Enter")
              (uid-set name)
              [])))

;root
(declare *reconciler*)

(def background
  #js{:width    "100%"
      :height   "100vh"
      :position "absolute"
      :top      0
      :left     0})

(defui Login
  static om/IQuery
  (query [this]
    [:client-id])
  Object
  (render [this]
    (let [client-id (-> this om/props :client-id)]
      (dom/div #js{:style background}
        (if-not (= client-id ::p/not-found)
          (str client-id)
          (dom/div #js{:style      #js{:display "inline-block" :zIndex 1}
                       :onKeyPress #(! this (uid-set (or (om/get-state this :name) "") %))}
            (dom/input #js{:ref      "name"
                           :type     "text"
                           :value    (or (om/get-state this :name) "choose name")
                           :onClick  #(om/update-state! this assoc :name "")
                           :onChange #(om/update-state! this assoc :name (.. % -target -value))})
            (dom/button #js{:onClick #(! this (uid-set (or (om/get-state this :name) "")))}
              "SEND")))))))

(defui MouseListener
  Object
  (render [this]
    (let [select (:select (om/props this))
          tag    (or (and (not= select ::p/not-found)
                          (peek select))
                     "_menu")
          basic  #js{:style       background
                     :onMouseDown #(! *reconciler* (select-mouse))}]
      (case tag
        "_menu" (-> #js{:onMouseMove #(! *reconciler* (mouse-model %))}
                    (js/Object.assign basic)
                    (dom/div))
        (-> #js{:onWheel     #(! *reconciler* (yaw-set select %))
                :onMouseMove #(->> (position-set select)
                                   (into (mouse-model %))
                                   (! *reconciler*))
                :onMouseUp   #(->> (select-menu)
                                   (into [(om/force `(:tags {:only [~tag]}) :remote)])
                                   (! *reconciler*))}
            (js/Object.assign basic)
            (dom/div))))))

(def mouse-listener
  (om/factory MouseListener))

(defui Main
  static om/IQuery
  (query [this]
    [:uid :client-id :stream :select {:tags (om/get-query ui/Entity2d)}])
  Object
  (render [this]
    (let [{:keys [uid client-id stream select tags]} (om/props this)]
      (dom/div #js{:style background}
        #_(event listeners)
        (mouse-listener {:select select})
        #_(show uid)
        (if-not (= uid ::p/not-found)
          (str uid)
          (str client-id))
        #_(show select)
        (dom/div #js{:style #js{:position "absolute"
                                :bottom   0}}
          (str select))
        #_(toggle stream)
        (dom/button #js{:onClick #(! this (stream-toggle %))
                        :style   #js{:position "relative"
                                     :float    "right"}}
          (name stream))
        #_(vr scene)
        (dom/div #js{:style (js/Object.assign #js{:zIndex -1} background)}
          (apply web/a-scene {:id  "scene"
                              :key :scene}
                 (web/a-entity {:id            "camera"
                                :key           :camera
                                :position      [0 0 -5]
                                :near          0.75
                                :rotation      [180 0 180]
                                :camera        {:active true :zoom 2}
                                :wasd-controls {:adInverted true :wsInverted true}})
                 (map ui/entity2d tags)))))))

;om.next
(defonce login (async/promise-chan))
(defonce app-state (atom init-data))

(defn merge-fn [reconciler state novelty _]
  (if-let [tags (:tags novelty)]
    (let [tagged (group-by last (:tags state))
          idents (transduce (mapcat tagged)
                            (completing #(assoc %1 %2 (tags (last %2))))
                            {}
                            (keys tags))]
      (om/default-merge reconciler state (merge (dissoc novelty :tags) idents) nil))
    (om/default-merge reconciler state novelty nil)))

(def parser (om/parser {:read p/read :mutate p/mutate}))
(def config {:logger    nil ;todo: merge :entities correctly
             :state     app-state
             :merge     merge-fn
             :parser    parser
             :normalize true
             :remotes   [:remote]
             :id-key    :tag})
(def app (gdom/getElement "app"))

(def ^:dynamic *reconciler*
  (->> (fn [{?query :remote} cb]
         (if-let [cid (-> ?query first last :tag)]
           (go (let [socket     (make-channel-socket-client! "/chsk" {:client-id cid
                                                                      :packer    (get-packer)})
                     ch-chsk    (:ch-recv socket)
                     chsk-send! (:send-fn socket)
                     data       @app-state
                     tempuid    (:uid data)
                     only-uid   (comp (map #(get-in data [% tempuid])) ;todo: treat them equal
                                      (map #(dissoc % :type :tag)))
                     isnt-uid   (comp (mapcat #(get data %)) ;todo: free on disconnect?
                                      (map last)
                                      (remove #(= (:tag %) tempuid))
                                      (map #(dissoc % :type))
                                      (map #(list `tag/new %)))
                     user-tag   (into {} only-uid (::om/tables data))
                     resources  (into [] isnt-uid (::om/tables data))]
                 (event (<! ch-chsk))                       ;chsk/state
                 (event (<! ch-chsk))                       ;chsk/handshake
                 (chsk-send! [::login (into `[(tag/root ~(om/get-query ui/Entity2d)) ;tags to listen
                                              (tag/merge ~user-tag) ;the user tag initial value
                                              ~@resources] ;create new tags as resources
                                            ?query)])
                 (event (<! ch-chsk)) ;for some reason the result comes back after a empty response
                 (cb (event (<! ch-chsk)) (om/get-query Main)) ;this is the result
                 (defonce sente socket)
                 (>! login socket)))))
       (assoc config :send)
       (om/reconciler)))

(om/add-root! *reconciler* Login app)

(defn distinct-by [f]
  (let [seen (volatile! (transient #{}))]
    (filter (fn [x]
              (let [y (f x)]
                (when-not (@seen y)
                  (vswap! seen conj! y)
                  true))))))

(defonce frame (async/chan 2))

(go-loop []
  (let [up (<! frame)]
    (set! om/*raf* (fn [f] (! *reconciler* up) (f) (set! om/*raf* nil)))
    (recur)))

(defn -main [& args]
  (take! login
    #(let [ch-chsk    (:ch-recv %)
           chsk-send! (:send-fn %)
           oldest     (fn [q] (if (list? q) (first q) q))]
       (om/remove-root! *reconciler* app)
       (set! *reconciler*
             (->> (fn [{?query :remote} cb]
                    (let [query (into [] (distinct-by oldest) (rseq ?query))
                          up    [{:tags [:position :yaw]}]]
                      (chsk-send! [::main query])
                      (set! om/*raf* (fn [f] (! *reconciler* up) (f) (set! om/*raf* nil)))
                      (take! ch-chsk (fn [msg] (cb (event msg))))))
                  (assoc config :send)
                  (om/reconciler)))
       (om/add-root! *reconciler* Main app))))