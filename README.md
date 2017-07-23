# unicycle
[Misc](http://www.irccyn.ec-nantes.fr/~martinet/Mobrob/KinematicModelling.pdf)
[Car](http://nfs.gongkong.com/u_files/robot/zl/chap4.pdf)

To compile the browser:

lein repl
(start)
(-main "3000") ;to also start the server

To run the server:

sudo /etc/init.d/apache2 restart
java -jar unicycle-0.0.0-standalone.jar 3000

"Use of undeclared Var cljs.user/? ... at line 1"
usually means the file encoding is "UTF-8 BOM" where it should be "UTF-8"