{"filter":false,"title":"makemongo.sh","tooltip":"/makemongo.sh","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":19}},"text":"#!/usr/bin/env bash"},{"action":"insertText","range":{"start":{"row":0,"column":19},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":5,"column":0}},"lines":["npm install mongodb","npm install mongoose","mkdir data","echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest \"$@\"' > mongod"]},{"action":"insertText","range":{"start":{"row":5,"column":0},"end":{"row":5,"column":16}},"text":"chmod a+x mongod"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":19},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1415216373041,"hash":"e4266d119b9e1b57410d52937f2cda872f3732cb"}