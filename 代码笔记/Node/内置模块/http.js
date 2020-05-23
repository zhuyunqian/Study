/*
1.http - 作用 - 搭建服务器，搭建http服务，接受请求处理请求，并响应

每次更改都需要重启服务，
-解决方案-安装nodemon包
npm install -g nodemon
*/

//1. 引入http模块
const http = require('http');
const url = require('url');

// 引入读取文件，引入路径，读取并返回到页面
const path = require('path');
const fs = require('fs');

//2. 配置服务器端口
const port= 8080;

//3. 创建服务器对象
const server = http.createServer((request,response)=>{
    // request请求  response响应

    // 每次接收请求，执行这里的代码
    // 请求一次，执行一次 刷新即是请求
    let requesturl = request.url; // 请求路径获取
    //console.log(requesturl);
    
    // get请求参数获取 -- true 跟false 是否吧参数转化为一个对象
    //let obj = url.parse(requesturl,true);
    //console.log(obj.query.path)

    //判断请求路径，进行返回
    if(requesturl == "/" || requesturl == "/index.html"){
        // 读取返回首页内容
        let pathfile = path.join(__dirname,'return.html');
        let content = fs.readFileSync(pathfile);

        response.end(content)
    }else if(requesturl == "/detail"){
         // 读取返回detail内容
         let pathfile = path.join(__dirname,'returndetails.html');
         let content = fs.readFileSync(pathfile);
 
         response.end(content)
    }else if(requesturl.endsWith('.css')){
        // 设置请求css文件，返回css文件
        let pathfile = path.join(__dirname,'style.css');
        let content = fs.readFileSync(pathfile);
        response.end(content)
    }else{
        // 遵循http协议，设置响应头信息，返回html
        response.setHeader("Content-type","text/html;charset=utf-8")
        response.end('请求错误，404')
    }



   
})

//4. 服务器监听，监听浏览器的请求
server.listen(port,(error)=>{
    if(error){
        console.log(error)
        return
    }
    console.log('webServer is'+port);
})