//引入服务端需要模块
const net = require('net');

//声明host和port
const host = process.argv[2];
const port = process.argv[3];
let socketlist = [];
let username = [];


//建立服务端
const server = net.createServer((socket) => {
    
    //添加socket
    socketlist.push(socket);    
    //console.log('服务端搭建成功，接收客户端请求')    
    socket.write('欢迎来到聊天室，请输入您的用户名');
   
    //定义name
    let name = ''; 

    //接收客户端数据
    socket.on('data', (data)=>{
	
        //判断name是否为空，为空转换data为字符串不为空,为老用户直接进行输入
	if(name == ''){
	    name = data.toString();

	    //判断name是否存在于username中,存在已经被注册，重新输入，不存在存入username列表中，并进行广播，新用户进入聊天室
	    if(username.includes(name)){
	        socket.write('您的用户名已经被注册，请重新输入!');
		name='';
	    }else{
		username.push(name);
		socketlist.forEach((val)=>{
		    val.write(`欢迎${name}加入聊天室\n`);
		});
		radio(data);
	    }
	    
        }else{
	    //输出用户输入数据，以及当前时间
	    let time = new Date();
	    let hour = time.getHours();
	    let minute = time.getMinutes();
	    let seconds = time.getSeconds();
	    let writime = hour+'时'+minute+'分'+seconds+'秒'
	    //遍历socket，输出时间和内容
    	    socketlist.forEach((val)=>{
	        val.write('time'+':'+writime+'\n'+`${name}:`);
	    });
	    //调用广播函数，输出用户输入数据
	    radio(data);

	}
        //给客户端返回数据
        //socket.write('你好，这里是服务器');
	
    });

    //监听用户关闭事件--用户退出--提示用户退出
    socket.on('close',(data)=>{
	//判断数组中的退出用户，并移除
	username.splice(username.indexOf(name),1);
	socketlist.splice(socketlist.indexOf(socket),1);
	socketlist.forEach((val)=>{
	    val.write(`用户${name}退出登录`);
	});

    });


});

//广播函数--用户输入数据输出
function radio(data){
    
    let ss = data.toString();
    socketlist.forEach((val)=>{

	val.write(ss);

    });

};	

server.listen(port,host,()=>{

    console.log('开始监听客户端请求');

});
