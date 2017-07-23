(ns common.cljc
  (:refer-clojure :exclude [alter-var-root alter]))

(defmacro if-cljs
  "Return then if we are generating cljs code and else for Clojure code.
   http://blog.nberger.com.ar/blog/2015/09/18/more-portable-complex-macro-musing"
  [then else]
  (if (:ns &env) then else))

(defmacro alter-var-root [var-ref f]
  `(if-cljs
     (set! ~(second var-ref) (~f @~var-ref))
     (clojure.core/alter-var-root ~var-ref ~f)))

(defmacro alter [& body]
  `(if-cljs
     (swap! ~@body)
     (clojure.core/alter ~@body)))