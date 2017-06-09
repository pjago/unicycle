(ns unicycle.app
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [om.next :refer [defui]])
  (:require [unicycle.ui :as ui]
            [unicycle.parser :as p]
            [unicycle.socket :refer [event]]
            [common.web :as web]
            [common.math :refer [π τ dt] :as a]
            [goog.dom :as gdom]
            [om.next :as om :refer [transact!] :rename {transact! !}]
            [om.dom :as dom]
            [cljs.core.async :as async :refer [take! put! <! >! alts!]]
            [taoensso.sente :as sente]
            [system.components.sente
             :refer [new-channel-socket-client]
             :rename {new-channel-socket-client new-socket}]
            [com.stuartsierra.component :as component :refer [start stop]]))

(enable-console-print!)

;data
(def init-data
  {:state  :on                                              ;#{:on :off}
   :cycles [{:id       "foo"
             :wheels   [:uni 0.1]
             :position [1 0 1]
             :yaw      0}]
   :mouse  [0.0 0.0 1.0]
   :target {:position [0.0 0.0 1.0]
            :yaw      0
            :size     0.2}})

;actions
(declare app-state)

(defn state-toggle [_]
  [`(state/toggle)
   :state])

(defn mouse-model [e]
  [`(mouse/model {:x   ~e.clientX
                  :y   ~e.clientY
                  :ref ~(gdom/getElement "camera")})
   :mouse])

(defn select-mouse [_]
  [`(select/mouse)
   :select])

(defn select-clear [_]
  [`(select/clear)
   :select])

(defn position-set [_]
  [`(position/set)
   :select])

(defn yaw-set [e]
  [`(yaw/set {:delta ~(* π 0.0005 e.deltaY)})
   :select])

(defn uid-set
  ([name] [`(uid/set {:value ~name})
           :uid])
  ([name e] (if (= e.key "Enter")
              (uid-set name)
              [])))

;root
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

(defui App
  static om/IQuery
  (query [this]
    [:uid :state :target {:cycles (om/get-query ui/Auto)}])
  Object
  (render [this]
    (let [{:keys [uid state target cycles]} (om/props this)]
      (dom/div #js{:style       background
                   :onMouseDown #(! this (select-mouse %))
                   :onMouseUp   #(! this (select-clear %))
                   :onWheel     #(! this (yaw-set %))
                   :onMouseMove #(do (! this (mouse-model %))
                                     (! this (position-set %)))}
        (str uid)
        #_(toggle state)
        (dom/button #js{:onClick #(! this (state-toggle %))
                        :style   #js{:position "relative"
                                     :float    "right"}}
          (case state :on "ON"
                      :off "OFF"))
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
            (web/a-entity {:key      "target"
                           :position (:position target)
                           :rotation [180 0 180]
                           :material {:opacity 0.3}
                           :geometry {:primitive 'circle
                                      :radius    (:size target)}})
            (map ui/auto cycles)))))))

;om.next
(defonce login (async/promise-chan))
(defonce app-state (atom (om/tree->db App init-data true)))
(def parser (om/parser {:read p/read :mutate p/mutate}))

(defn -main [& args]
  (let [app    (gdom/getElement "app")
        config {:logger  nil
                :state   app-state
                :parser  parser
                :remotes [:remote]}
        newr   #(om/reconciler (assoc config :send %))
        raux   (newr (fn [{?query :remote} cb]
                       (if-let [cid (-> ?query first last :value)]
                         (go (let [socket     (start (new-socket nil "/chsk" {:client-id cid}))
                                   ch-chsk    (:ch-chsk socket)
                                   chsk-send! (:chsk-send! socket)]
                               (event (<! ch-chsk))         ;chsk/state
                               (event (<! ch-chsk))         ;chsk/handshake
                               (chsk-send! [:query/remote ?query])
                               (cb (event (<! ch-chsk)))
                               (def sente socket)
                               (>! login socket))))))]
    ;before login
    (om/add-root! raux Login app)
    (def reconciler raux)
    ;after login
    (go (let [socket     (<! login)
              ch-chsk    (:ch-chsk socket)
              chsk-send! (:chsk-send! socket)
              ractual    (newr (fn [{q? :remote} cb]
                                 (chsk-send! [:query/remote
                                              (vec (concat
                                                     (->> (filter list? q?)
                                                          (group-by first)
                                                          vals
                                                          (map last))
                                                     (distinct (remove list? q?))))])
                                 (take! ch-chsk (comp cb
                                                      #(om/tree->db App % true)
                                                      event))))]
          (om/remove-root! raux app)
          (om/add-root! ractual App app)
          (set! om/*raf*
                (fn [f]
                  (f)
                  (! ractual ['(refresh/remote) :cycles])))
          (def reconciler ractual)))))
