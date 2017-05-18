(defproject unicycle "0.0.0"
  :description "Mobile Robot Control"
  :dependencies [[org.clojure/clojure "1.9.0-alpha16"]
                 [org.clojure/clojurescript "1.9.542"]
                 [net.mikera/core.matrix "0.58.0"]
                 [org.clojure/core.async "0.3.442"]
                 [com.taoensso/sente "1.11.0"]
                 [http-kit "2.2.0"]
                 [compojure "1.6.0"]
                 [ring "1.6.1"]
                 [ring/ring-defaults "0.3.0"]
                 [ring-cors "0.1.10"]
                 [org.clojure/data.json "0.2.6"]
                 [figwheel-sidecar "0.5.10"]
                 [org.omcljs/om "1.0.0-alpha48"]]
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
                                  [criterium "0.4.4"]]}}
  :figwheel {:server-port 9222}
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]
                :figwheel {:on-jsload "unicycle.app/on-reload"
                           :websocket-host :server-ip}
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
  :aot :all
  :main unicycle.server
  :source-paths ["src"]
  :test-paths ["test"])
