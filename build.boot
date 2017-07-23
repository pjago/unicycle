(def +project+ 'unicycle)
(def +version+ "0.0.3")
(def +port+ "3001")
(def +ipv4+ "127.0.0.1")
(def +ipv6+ "0:0:0:0:0:0:1")

(set-env!
  :source-paths #{"src" "test"}
  :resource-paths #{"resources"}
  :dependencies '[[powerlaces/boot-figreload "0.1.1-SNAPSHOT" :scope "test"]
                  [pandeiro/boot-http "0.8.3" :scope "test"]
                  [adzerk/boot-cljs "2.0.0" :scope "test"]
                  [adzerk/boot-cljs-repl "0.3.3" :scope "test"]
                  [com.cemerick/piggieback "0.2.1"  :scope "test"]
                  [weasel "0.7.0" :scope "test"]
                  [org.clojure/tools.nrepl "0.2.12" :scope "test"]
                  [org.clojure/test.check "0.9.0" :scope "test"]
                  [criterium "0.4.4" :scope "test"]
                  [boot-environ "1.1.0" :scope "test"]
                  [environ "1.1.0"]
                  [org.danielsz/system "0.4.1-SNAPSHOT"]
                  [com.stuartsierra/component "0.3.2"]
                  [org.clojure/clojure "1.9.0-alpha16"]
                  [org.clojure/clojurescript "1.9.542"]
                  [net.mikera/core.matrix "0.58.0"] ;*
                  [org.clojure/core.async "0.3.442"]
                  [com.taoensso/sente "1.11.0"]
                  [org.immutant/web "2.1.8"]
                  [http-kit "2.3.0-alpha2"] ;todo: one or the other
                  [compojure "1.6.0"]
                  [ring/ring-core "1.6.1"]
                  [ring/ring-defaults "0.3.0"]
                  [ring-middleware-format "0.7.0"]
                  [org.omcljs/om "1.0.0-alpha48"]])

(require '[environ.boot :refer [environ]]
         '[powerlaces.boot-figreload :refer [reload]]
         '[adzerk.boot-cljs :refer [cljs]]
         '[pandeiro.boot-http :refer [serve]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
         '[system.repl :refer [start stop reset]]
         '[system.boot :refer [system run]]
         '[unicycle.systems :as sys :refer [uni-system]])

(task-options!
  run {:main-namespace "unicycle.server"}
  pom {:project     +project+
       :version     +version+
       :description "Plataforma de aprendizado de controle digital"
       :url         "https://github.com/pjago/unicycle"
       :scm         {:url "https://github.com/pjago/unicycle"}
       :license     {"The MIT License (MIT)" "http://opensource.org/licenses/mit-license.php"}})

(deftask build []
  (comp (cljs :optimizations :advanced
              :compiler-options {:parallel-build true}
              :infer-externs true)
        (aot :all true)
        (pom)
        (uber)
        (jar :file "unicycle.jar"
             :main 'unicycle.server)
        (sift :include #{#"unicycle.jar"})
        (target)))

(deftask dev []
  (comp (environ :env {:http-port +port+
                       :ip-server +ipv4+})
        (watch)
        (repl :server true
              :port 9000)
        (system :sys     #'uni-system
                :auto    true
                :mode    :lisp
                :files   [".*\\.cljc" ".*\\.clj"]
                :regexes true)
        (reload)
        (serve :port 3000
               :dir  "target")
        (cljs-repl :nrepl-opts {:port 9001})
        (cljs :source-map       true
              :compiler-options {:preloads '[unicycle.user]})
        (notify :audible true)
        (target)))
