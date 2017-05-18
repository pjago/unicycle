# unicycle
[Misc](http://www.irccyn.ec-nantes.fr/~martinet/Mobrob/KinematicModelling.pdf)
[Car](http://nfs.gongkong.com/u_files/robot/zl/chap4.pdf)

To update gh-pages:

Compile the javascript by 'lein cooper'

remove '/resources/' from .gitignore

git add -A

git commit "update gh-pages"

git subtree push --prefix resources/public origin gh-pages

add '/resources/' to .gitignore

git rm -r resources

git add -A

git commit "please help"

find a better way to do it.

To run the server:

sudo /etc/init.d/apache2 restart
java -jar unicycle-0.0.0-standalone.jar 3000
