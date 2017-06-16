(ns unicycle.app
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [om.next :refer [defui]])
  (:require [unicycle.ui :as ui]
            [unicycle.parser :as p]
            [unicycle.socket :refer [event]]
            [common.web :as web]
            [goog.dom :as gdom]
            [om.next :as om :refer [transact!] :rename {transact! !}]
            [om.dom :as dom]
            [cljs.core.async :as async :refer [take! <! >!]]
            [taoensso.sente :as sente :refer [make-channel-socket-client!]]))

;data
(defonce init-data
  {:state  :on                                              ;#{:on :off}
   :mouse  [0.0 0.0 1.0]
   :select [:entity/menu "_menu"]})
;   :entities [[:entity/cycle (om/tempid)]
;              [:entity/target "target"]]})

(declare app-state)

;actions
(defn state-toggle [_]
  [`(state/toggle)
   :state])

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
  [`(yaw/set {:select ~s :delta ~(* 0.0015708 e.deltaY)})])

(defn uid-set
  ([name] [`(uid/set {:value ~name})
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
    (let [cid (-> this om/props :client-id)]
      (dom/div #js{:style background}
        (if (= cid ::p/not-found)
          (dom/div #js{:style      #js{:display "inline-block" :zIndex 1}
                       :onKeyPress #(! this (uid-set (or (om/get-state this :name) "") %))}
            (dom/input #js{:ref      "name"
                           :type     "text"
                           :value    (or (om/get-state this :name) "choose name")
                           :onClick  #(om/update-state! this assoc :name "")
                           :onChange #(om/update-state! this assoc :name (.. % -target -value))})
            (dom/button #js{:onClick #(! this (uid-set (or (om/get-state this :name) "")))}
              "SEND"))
          (str cid))))))

(defui MouseListener
  Object
  (render [this]
    (let [select (:select (om/props this))
          tag    (last select)
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
                                   (into `[(:entities ~{:only [tag]})])
                                   (! *reconciler*))}
            (js/Object.assign basic)
            (dom/div))))))

(def mouse-listener
  (om/factory MouseListener))

(defui Main
  static om/IQuery
  (query [this]
    [:uid :client-id :state :select {:entities (om/get-query ui/Entity)}])
  Object
  (render [this]
    (let [{:keys [uid client-id state select entities]} (om/props this)]
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
        #_(toggle state)
        (dom/button #js{:onClick #(! this (state-toggle %))
                        :style   #js{:position "relative"
                                     :float    "right"}}
          (name state))
        #_(vr scene)
        (dom/div #js{:style (js/Object.assign #js{:zIndex -1} background)}
          (apply web/a-scene {:id  "scene"
                              :key :scene}
            (web/a-entity {:id            "camera"
                           :key           :camera
                           :position      [0 0 -5]
                           :rotation      [180 0 180]
                           :camera        {:active true :zoom 2}
                           :wasd-controls {:adInverted true :wsInverted true}})
            (map ui/entity entities)))))))

;om.next
(defonce login (async/promise-chan))
(defonce app-state (atom (om/tree->db Main init-data true)))

(defn merge-fn [reconciler state novelty _]
  (if-let [entities (:entities novelty)]
    (let [tagged (group-by last (:entities state))
          idents (transduce (mapcat #(tagged (key %)))
                            (completing #(assoc %1 %2 (entities (last %2))))
                            {}
                            entities)]
      ;(om/default-merge reconciler state idents nil))
      (om/default-merge reconciler state {:entities (vec (vals entities))} nil)) ;to remove
    (om/default-merge reconciler state novelty nil)))

(def parser (om/parser {:read p/read :mutate p/mutate}))
(def config {:logger    nil ;todo: merge :entities correctly
             :state     app-state
             :merge     merge-fn
             :parser    parser
             :normalize true
             :remotes   [:remote]})
(def app (gdom/getElement "app"))

(def ^:dynamic *reconciler*
  (->> (fn [{?query :remote} cb]
         (if-let [cid (-> ?query first last :value)]
           (go (let [socket     (make-channel-socket-client! "/chsk" {:client-id cid})
                     ch-chsk    (:ch-recv socket)
                     chsk-send! (:send-fn socket)]
                 (event (<! ch-chsk))                       ;chsk/state
                 (event (<! ch-chsk))                       ;chsk/handshake
                 (chsk-send! [::login ?query])
                 (cb (event (<! ch-chsk)))
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

(defn -main [& args]
  (take! login
    #(let [ch-chsk    (:ch-recv %)
           chsk-send! (:send-fn %)
           oldest     (fn [q] (if (list? q) (first q) q))
           on-frame   (fn [f] (! *reconciler* [:entities]) (f))]
       (om/remove-root! *reconciler* app)
       (set! *reconciler*
             (->> (fn [{?query :remote} cb]
                    (let [query (into [] (distinct-by oldest) (rseq ?query))]
                      (chsk-send! [::main query])
                      (set! om/*raf* (fn [f] (on-frame f) (set! om/*raf* nil)))
                      (take! ch-chsk (fn [msg] (cb (event msg)))))) ;todo: pass query and optimize
                  (assoc config :send)
                  (om/reconciler)))
       (om/add-root! *reconciler* Main app))))