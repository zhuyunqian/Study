const net = require('net');
const Port = 8086;
const Host = '127.0.0.1'
const portlist = [];
const server = net.createServer((socket)=>{
    portlist.push(socket);
    socket.on('data', (data)=>{
        console.log('客户端数据'+data);
	broadcast(data)
    })
    socket.write('111111111111112222222')
    //socket.on('close',()=>{
    //    console.log('close')
    //})

})

function broadcast(data){
    for(var i=0; i<portlist.length; i++){
	portlist[i].write(data);
    }
}

server.listen(Port,Host,()=>{

    console.log('网址：'+Host+':'+Port)

})
