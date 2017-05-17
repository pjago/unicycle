(defproject unicycle "0.0.0"
  :description "Mobile Robot Control"
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.521"]
                 [net.mikera/core.matrix "0.58.0"]
                 [org.clojure/core.async "0.3.442"]
                 [org.clojure/core.memoize "0.5.8"]
                 [com.taoensso/sente "1.11.0"]
                 [http-kit "2.2.0"]
                 [compojure "1.6.0"]
                 [ring "1.4.0"]
                 [ring/ring-defaults "0.2.0"]
                 [ring-cors "0.1.7"]
                 [org.omcljs/om "LATEST"]]
  :plugins [[lein-midje "3.1.3"]
            [lein-figwheel "0.5.10"]
            [lein-cljsbuild "1.1.6"]]
  :profiles {:dev {:optimizations :advanced
                   :dependencies [[org.clojure/test.check "0.9.0"]
                                  [org.clojure/tools.namespace "0.2.11"]
                                  [proto-repl "0.3.1"]
                                  [proto-repl-charts "0.3.2"]
                                  [proto-repl-sayid "0.1.3"]
                                  [com.cemerick/piggieback "0.2.1"]
                                  [figwheel-sidecar "0.5.10"]
                                  [criterium "0.4.4"]
                                  [midje "1.8.3"]
                                  [quil "2.5.0"]
                                  [binaryage/dirac "RELEASE"]]}}
  :figwheel {:server-port 9222
             :repl false}
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]
                :figwheel {:on-jsload "unicycle.app/on-reload"}
                :compiler {:main unicycle.app
                           :asset-path "js"
                           :output-to "resources/public/js/app.js"
                           :output-dir "resources/public/js"
                           :parallel-build true
                           :compiler-stats true
                           :pretty-print true
                           :verbose false}}]}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]
                 :timeout 120000}
  :source-paths ["src"]
  :test-paths ["test"])
