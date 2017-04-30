(defproject unicycle "0.0.0"
  :description "Mobile Robot Control"
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.521"]
                 [net.mikera/core.matrix "0.58.0"]
                 [net.mikera/vectorz-clj "0.46.0"]
                 [org.omcljs/om "LATEST"]]
  :plugins [[lein-midje "3.1.3"]
            [lein-cooper "1.2.2"]]
  :cooper {"FIGWHEEL" ["lein" "with-profile" "+cljs-dev" "run" "-m" "clojure.main" "--init" "script/figwheel.clj" "-r"]}
  :profiles {:cljs-dev {}
             :dev {:source-paths ["src" "test"]
                   :dependencies [[org.clojure/test.check "0.9.0"]
                                  [org.clojure/tools.namespace "0.2.11"]
                                  [proto-repl "0.3.1"]
                                  [proto-repl-charts "0.3.2"]
                                  [proto-repl-sayid "0.1.3"]
                                  [criterium "0.4.4"]
                                  [midje "1.8.3"]
                                  [figwheel-sidecar "0.5.10-SNAPSHOT"]
                                  [quil "2.5.0"]]}}
  :source-paths ["src"]
  :test-paths ["test"])
