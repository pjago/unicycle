(ns unicycle.app ;todo: make a clj version
  (:refer-clojure :exclude [read])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [om.next :refer [defui]])
  (:require [unicycle.ui :as ui]
            [unicycle.tags :as tags]
            [unicycle.parser :as p :refer [grammar read mutate]]
            [unicycle.socket :refer [event get-packer]]
            [common.cljc :as cljc]
            [common.web :as web]
            [common.math :as a]
            [goog.dom :as gdom]
            [om.next :as om :refer [transact!] :rename {transact! !}]
            [om.dom :as dom]
            [cljs.core.async :as async :refer [put! take! <! >!]]
            [taoensso.sente :as sente :refer [make-channel-socket-client!]]))

;data
(defonce init-data
  (let [user (om/tempid "user") ;todo: remove
        robo (om/tempid "robo")]
    {:uid          user
     :stream       :off                                              ;#{:on :off}
     :mouse        [0.0 0.0 1.0]
     :select       :menu
     :tag/user     [[::ui/position user]
                    [::ui/rotation user]
                    [::ui/wheels   user]
                    [::ui/target   user]]
     :tag/robo     [[::ui/position robo]
                    [::ui/rotation robo]
                    [::ui/target   robo]]
     ::ui/position {user (ui/->Position# 0 0 1)
                    robo (ui/->Position# 1 1 1)}
     ::ui/rotation {user (ui/->Rotation# 0)
                    robo (ui/->Rotation# 0)}
     ::ui/wheels   {user (ui/->Wheels# :omni 0.2)}
     ::ui/target   {user (ui/->Target# 0.2)
                    robo (ui/->Target# 0.2)}
     ::om/tables   #{::ui/position
                     ::ui/rotation
                     ::ui/wheels
                     ::ui/target}}))

(declare app-state)

;actions
(cljc/alter-var-root #'grammar
  #(-> (derive % :tag/user ::p/tags)
       (derive :tag/robo ::p/tags)))

(defn stream-toggle []
  [`(stream-toggle)
   :stream])

(defmethod mutate `stream-toggle [{app :state} _ _]
  {:action #(swap! app update :stream {:on :off :off :on})
   :remote true})

(defn mouse-model [event ref]
  (let [r   (new js/THREE.Raycaster)
        z   (new js/THREE.Plane (new js/THREE.Vector3 0 0 1) -1)
        v   (new js/THREE.Vector2
                 (- (* (/ event.clientX js/window.innerWidth) 2) 1)
                 (- 1 (* (/ event.clientY js/window.innerHeight) 2)))
        cam (-> ref .-object3D .-children (aget 0))]
    (.setFromCamera r v cam)
    [`(mouse-model {:value ~(.intersectPlane (.-ray r) z)})
     :mouse]))

(defmethod mutate `mouse-model [{app :state} _ {mouse :value}]
  {:action #(swap! app assoc :mouse mouse)})

(defn select-mouse []
  [`(select-mouse)
   :select])

(defmethod mutate `select-mouse [{app :state} _ _]
  (let [{:keys [mouse] :as data} @app
        it (->> (::ui/position data)
                (into [] (a/closest (comp vals val) [(.-x mouse) (.-y mouse) (.-z mouse)]))
                (peek)
                (key))]
    {:action #(swap! app assoc :select it)}))

(defn select-menu []
  [`(select-menu)
   :select])

(defmethod mutate `select-menu [{app :state} _ _]
  {:action #(swap! app assoc :select :menu)})

(defn uid-set ;todo: remove
  ([name] [`(uid-set {:tag ~name})
           :uid])
  ([name event] (if (= (.-key event) "Enter")
                  (uid-set name)
                  [])))

(defmethod mutate `uid-set [{:keys [state ast]} _ {name :tag}] ;todo: remove
  (let [uid (:uid @state)]
    (when (om/tempid? uid)
      {:action #(swap! state assoc :client-id name)
       :remote (update ast :params assoc :tempid uid)})))

(defmethod read :uid [{app :state} _ _] ;todo: remove
  (let [uid (:uid @app)]
    (if-not (om/tempid? uid)
      {:value uid}
      {:value ::not-found :remote true})))

;root
(declare *reconciler*)

(def background
  #js{:width    "100%"
      :height   "100vh"
      :position "absolute"
      :top      0
      :left     0})

(defui Login ;todo: remove (server-side rendering)
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
          tag    (if (= select ::p/not-found) :menu select)
          cam    (:camera (om/props this))
          basic  #js{:style       background
                     :onMouseDown #(! *reconciler* (select-mouse))}]
      (case tag
        :menu (-> #js{:onMouseMove #(! *reconciler* (mouse-model % (gdom/getElement cam)))}
                  (js/Object.assign basic)
                  (dom/div))
        (-> #js{:onWheel     #(! *reconciler* (ui/spin tag %))
                :onMouseMove #(->> (ui/drag tag (:mouse @app-state))
                                   (into (mouse-model % (gdom/getElement cam)))
                                   (! *reconciler*))
                :onMouseUp   #(->> (select-menu)
                                   (into [(om/force [::ui/position tag] :remote)]) ;todo: remote ident reads
                                   (! *reconciler*))}
            (js/Object.assign basic)
            (dom/div))))))

(def mouse-listener
  (om/factory MouseListener))

(defui Main
  static om/IQuery
  (query [this]
    [:uid :client-id :stream :select
     {:tag/user (tags/get-query ::ui/position ::ui/rotation ::ui/wheels ::ui/target)} ;todo: joins
     {:tag/robo (tags/get-query ::ui/position ::ui/rotation ::ui/target)}]) ;union needed for om-path
  Object
  (render [this]
    (let [{:keys [uid client-id stream select :tag/user :tag/robo]} (om/props this)]
      (dom/div #js{:style background}
        #_(event listeners)
        (mouse-listener {:select select :camera "camera"})
        #_(show uid)
        (if-not (= uid ::p/not-found)
          (str uid)
          (str client-id)) ;todo: remove
        #_(show select)
        (dom/div #js{:style #js{:position "absolute"
                                :bottom   0}}
          (str select))
        #_(toggle stream)
        (dom/button #js{:onClick #(! this (stream-toggle))
                        :style   #js{:position "relative"
                                     :float    "right"}}
          (name stream))
        #_(vr scene)
        (dom/div #js{:style (js/Object.assign #js{:zIndex -1} background)}
          (web/a-scene {:id  "scene"
                        :key :scene}
                       (web/a-entity {:id            "camera"
                                      :key           :camera
                                      :position      [0 0 -5]
                                      :near          0.75
                                      :rotation      [180 0 180]
                                      :camera        {:active true :zoom 2}
                                      :wasd-controls {:adInverted true :wsInverted true}})
                       (tags/draw user)
                       (tags/draw robo)))))))

;om.next
(defonce login (async/promise-chan)) ;todo: remove
(defonce app-state (atom init-data))

(def parser (om/parser {:read p/read :mutate p/mutate}))
(def config {:logger       nil
             :elide-paths? true
             :state        app-state
             :parser       parser
             :normalize    true
             :remotes      [:remote]})
(def app (gdom/getElement "app"))

(def ^:dynamic *reconciler* ;todo: remove
  (->> (fn [{?query :remote} cb]
         (if-let [cid (-> ?query first last :tag)]
           (go (let [socket     (make-channel-socket-client! "/chsk" {:client-id cid
                                                                      :packer    (get-packer)})
                     ch-chsk    (:ch-recv socket)
                     chsk-send! (:send-fn socket)
                     data       @app-state
                     tempuid    (:uid data)
                     tags-xf    (comp (mapcat #(get data %)) ;todo: free on disconnect?
                                      (map (fn [[k v]] `(tag/assoc {:tag ~k :value ~v}))))
                     all-tags   (into [] tags-xf (::om/tables data))
                     type-info  (tags/get-query ::ui/position ::ui/rotation ::ui/wheels ::ui/target)]
                 (event (<! ch-chsk))                       ;chsk/state
                 (event (<! ch-chsk))                       ;chsk/handshake
                 (chsk-send! [::login `[(tag/root ~type-info) ~@?query ~@all-tags]])
                 (event (<! ch-chsk))                       ;for some reason I have to do this
                 (println "foo")
                 (cb (event (<! ch-chsk)) (om/get-query Main))
                 (println "brreak")
                 (defonce sente socket)
                 (>! login socket)))))
       (assoc config :send)
       (om/reconciler)))

(om/add-root! *reconciler* Login app) ;todo: remove

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
           oldest     (fn [q] (if (and (list? q) (not= (first q) 'quote)) ;todo: make it faster
                                  (first q)
                                  q))]
       (om/remove-root! *reconciler* app)
       (set! *reconciler*
             (->> (fn [{?query :remote} cb]
                    (let [query (into [] (distinct-by oldest) (rseq ?query))]
                      (chsk-send! [::main query])
                      (if (= (:stream @app-state) :on)
                        (let [up [(om/force [::ui/position '_] :remote)
                                  (om/force [::ui/rotation '_] :remote)]]
                          (set! om/*raf* (fn [f] (! *reconciler* up) (f) (set! om/*raf* nil)))))
                      (take! ch-chsk (fn [msg] (cb (event msg))))))
                  (assoc config :send)
                  (om/reconciler)))
       (om/add-root! *reconciler* Main app))))