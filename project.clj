(defproject unicycle "0.0.3"
  :source-paths #{"src"}
  :test-paths #{"test"}
  :resource-paths #{"resources"}
  :dependencies [[figwheel-sidecar "0.5.10" :scope "test"]
                 [powerlaces/boot-figreload "0.1.1-SNAPSHOT" :scope "test"]
                 [pandeiro/boot-http "0.8.3" :scope "test"]
                 [adzerk/boot-cljs "2.0.0" :scope "test"]
                 [adzerk/boot-cljs-repl   "0.3.3" :scope "test"]
                 [com.cemerick/piggieback "0.2.1"  :scope "test"]
                 [weasel "0.7.0"  :scope "test"]
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
                 [http-kit "2.3.0-alpha2"]
                 [compojure "1.6.0"]
                 [ring/ring-core "1.6.1"]
                 [ring/ring-defaults "0.3.0"]
                 [ring-middleware-format "0.7.0"]
                 [org.omcljs/om "1.0.0-alpha48"]]
  :plugins [[lein-figwheel "0.5.10"]
            [lein-cljsbuild "1.1.6"]]
  :figwheel {:server-port 9001}
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]
                :figwheel {:on-jsload "unicycle.app/-main"
                           :websocket-host :server-ip}
                :compiler {:main unicycle.app
                           :asset-path "main.out"
                           :output-to "target/public/main.js"
                           :output-dir "target/public/main.out"
                           :parallel-build true
                           :compiler-stats true
                           :pretty-print true
                           :verbose false}}]}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]
                 :timeout 500000}
  :main unicycle.server)
