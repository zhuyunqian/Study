//引入客户端需要模块
const net = require('net');
const readline = require('readline');

//声明端口
const host = process.argv[2];
const port = process.argv[3];
let id =1;


//接入输入流输出流
const rl = readline.createInterface({

    input:process.stdin,
    output:process.stdout

});

//终端交互
rl.prompt();

//客户端接入
const client = net.createConnection(port,host);


client.on('connect', ()=>{
    
    //提示
    console.log('客户端：已经与服务器建立链接');
    //获取输入流--line--一行
    rl.on('line',(content)=>{
	//输入流为exit--退出登录，否则，提示建立链接，告知服务端输入内容
	if(content == 'exit'){
	    rl.close();
	}else{
	   if(id == 1){
	      // console.log('客户端：已经与服务端建立链接');
	   }
	   
	   client.write(`${content}`)
	}
    });
    //监听关闭事件
    rl.on('close',()=>{
	console.log('再见');
	process.exit(0);
    });

}); 

//客户端获取服务端数据
client.on('data',(data)=>{

    console.log(data.toString());

});

//监听关闭事件
client.on('close', ()=>{

    console.log('客户端：服务器断开');

});
