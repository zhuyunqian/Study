const net = require('net');
const server = net.createServer();
const clients = {};
var client = null;
var uid = 0;
server.on('connection', (socket) => {
    var isOnline = !0;
    var keepAliveTimer = socket.timer = setInterval(() => {
        if (!isOnline) {
            client = socket;
            quite(socket.nick);
            return;
        }
        if (socket.writable) {
            isOnline = !1;
            socket.write('::');
        } else {
            client = socket;
            quit(socket.nick);
        }
    }, 3000);
    socket.on('end', () => {
        console.log(`client disconnected.\n`);
        socket.destroy();

    });
    socket.on('error', () => {
        console.log(`error.message`);
    });
    socket.on('data', (chunk) => {
        client = socket;
        var msg = JSON.parse(chunk.toString());
        if (msg.cmd == 'keep') {
            isOnline = !0;
            return;
        }
        dealMsg(msg);
    });
});
server.on('error', (err) => {
    console.log(error.message);
});
server.on('listening', () => {
    console.log(`listening on ${server.address().port}\n`);

});
server.listen(8800);

function dealMsg(msg) {
    const cmd = msg.cmd;
    const funs = {
        'login': login,
        'chat': chat,
        'quit': quit,
        'exit': quit
    };
    if (typeof funs[cmd] !== 'function') return !1;
    funs[cmd](msg);
}

function freeConn(conn) {
    conn.end();
    delete client[conn.uuid];
    conn.timer && clearInterval(conn.timer);
}

function login(msg) {
    var uuid = '';
    uuid = getRndStr(15) + (++uid);
    client.write(`欢迎你:${msg.nick},这里共有${Object.keys(clients).length}个朋友在聊天室.\n`)
    client.nick = msg.nick;
    client.uuid = uuid;
    clients[uuid] = client;
    broadcast(`系统:${msg.nick}进入了聊天室.`);

}

function getRndStr(len = 1) {
    var rndStr = '';
    for (; rndStr.length < len; rndStr += Math.random().toString(36).substr(2));
    return rndStr.substr(0, len);
}

function broadcast(msg) {
    Object.keys(clients).forEach((uuid) => {
        if ((clients[uuid] != client) & clients[uuid].writable) {
            clients[uuid].write(msg);
        }
    });
}

function quit(nick) {
    var message = `${nick}退出了聊天室.`;
    broadcast(message);
    freeConn(client);
}

function chat(msg) {
    if (msg.msg.toLowerCase() == 'QUIT' /*|| msg.msg.toLowerCase() == 'exit'*/ ) {
        quit(msg.nick);
        return;
    }
    var message = `${msg.nick}说:${msg.msg}`;
    broadcast(message);
}

function getRndStr(len = 1) {
    var rndStr = '';
    for (; rndStr.length < len; rndStr += Math.random().toString(36).substr(2));
    return rndStr.substr(0, len);
}
