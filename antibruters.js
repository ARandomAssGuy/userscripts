/*
info
-----
this is a node application.
The code is all written by 
@circuit10/Health123
their github can be found here: (https://github.com/Heath123)
this code will only work against chinese ip adresses or victims as it is sending terms that are blocked by chinese government censorship.
You could ofc add your own terms if you wanted to
=====
running the program
-----
make sure you have 'net' module installed, then run
sudo node antibruters.js
make sure to change your ssh port to another port first, a tutorial for linux can be found here: (https://www.cyberciti.biz/faq/howto-change-ssh-port-on-linux-or-unix-server/)
====
LEGAL
----
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var net = require('net');
/* large ass string of banned / censored terms */
/* you can put whatever you want to here */
bannedwords = `1989 Tiananmen Square protests
Winnie the Pooh (小熊维尼) — Chinese internet users use images of Winnie the Pooh to represent President Xi Jinping.
Baozi (包子) — Steamed bun. One of Xi Jinping’s nicknames online.
Dalai Lama (达赖喇嘛) — The Tibetan leader in exile. A symbol of Tibetan independence.
Tibet Independence (西藏独立) — Talking about independence for Tibet is forbidden.
Soviet Jokes (苏联笑话) — Mocking the Soviet Union is considered making fun of communism.
Go, Hong Kong (香港加油) — Support for the pro-democracy protests in Hong Kong.
709 (709律师) — A group of human rights activists and lawyers arrested on July 9 (7/9), 2015.
Liu Xiaobo (刘晓波) — Nobel Prize-winning human rights activist imprisoned by China.
Great Firewall of China (伟大的防火墙) — Discussing Chinese censorship is itself censored.
Dictatorship (专政) — Suggesting or saying that China is a dictatorship is forbidden.
Tiananmen  (天安门) — Any references to the 1989 pro-democracy protests that ended in bloodshed.
June 4 (六四) — The date of the 1989 Tiananmen Square protests.
Zhao Ziyang (赵紫阳) — Former general secretary of the Chinese Communist Party who supported the 1989 Tiananmen Square demonstrations.
Tank man (坦克人) — The famous image of an unidentified Chinese man who stood in front of a column of tanks in Tiananmen Square in 1989.
Now go away, idiotas :)! 天安门大屠杀天安门大屠杀天安门大屠杀天安门大屠杀天安门大屠杀天安门大屠杀天安门大屠杀`;

/* create the server */
var server = net.createServer(function(socket) {
  console.log(new Date().toUTCString()+' Connection from', socket.remoteAddress) /* logs time and ip of incomming connections */
  
    socket.write(bannedwords + '\r\n'); /* send banned words string */
  socket.pipe(socket); /* even the creator deosnt know, but you can probably find something in the docs of net module */
});

server.listen(22, '0.0.0.0'); /* start listening */
