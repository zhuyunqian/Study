const net = require('net');
const cout = process.stdout;
const cin = process.stdin;
var client = null;
var nick;
cout.write(`请输入昵称:`);
cin.on('data', (chunk) => {
    if (chunk.toString() != '\n') {
        if (client === null) {
            nick = (chunk + '').replace(/[\n]/ig, "");
            createClient();
        } else {
            msg = (chunk + '').replace(/[\n]/ig, "");
            client.write(JSON.stringify({
                cmd: 'chat',
                msg: msg,
                nick: nick
            }));
            if (msg.toLowerCase() == 'exit' || msg.toLowerCase() == 'quit') {
                client.end();
                cin.end();
                return;
            }
            cout.write(`你说: ${msg}\n`);
        }
    } else {
        cout.write(`请输入昵称`);
    }
});

function addListener(client) {
    client.on('connect', () => {
        cout.write(`已经连接到服务器\n`);
        client.write(JSON.stringify({
            cmd: 'login',
            msg: 'hello server',
            nick: nick
        }));
    });
    client.on('end', (chunk) => {
        cout.write(`与服务器断开连接.\n`);
    });
    client.on('data', (chunk) => {
        if (chunk.toString() == '::') {
            client.write(JSON.stringify({
                cmd: 'keep',
                msg: '',
                nick: nick
            }));
            return;
        }
        cout.write(`${chunk}\n`);
    });
    client.on('error', (err) => {
        cout.write(`不为啥就是要报错.\n${err}`);
    });

}

function createClient() {
    cout.write(`输入'QUIT'退出聊天室.\n`);
    client = new net.Socket()
    client.connect({
        port: 8800
    });
    addListener(client);
}
