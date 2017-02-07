(defproject unicycle "0.0.0"
  :description "Game like thing with core.async"
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.456"]
                 [proto-repl "0.3.1"]
                 [proto-repl-charts "0.3.2"]
                 [net.mikera/core.matrix "0.54.0"]
                 [net.mikera/vectorz-clj "0.45.0"]
                 [quil "2.5.0"]
                 [com.rpl/specter "0.13.1-SNAPSHOT"]
                 [org.clojure/core.async "0.2.391"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [org.clojure/core.logic "0.8.10"]
                 [org.clojure/test.check "0.9.0"]
                 [criterium "0.4.4"]
                 [midje "1.8.3"]
                 [figwheel-sidecar "0.5.0-2" :scope "test"]
                 [org.omcljs/om "LATEST"]]
  :plugins [[lein-midje "3.1.3"]
            [lein-cooper "1.2.2"]]
  :cooper {"FIGWHEEL" ["lein" "with-profile" "+cljs-dev" "run" "-m"
                         "clojure.main" "--init" "script/figwheel.clj" "-r"]
           "MIDJE" ["lein" "midje" ":autotest"]}
  :profiles {:cljs-dev {}
             :dev {:source-paths ["dev" "src" "test"]
                   :dependencies [[org.clojure/tools.namespace "0.2.11"]]}}
  :source-paths ["src"]
  :test-paths ["test"])
