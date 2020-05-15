/*
1.http - 作用 - 搭建服务器，搭建http服务，接受请求处理请求，并响应
*/

//1. 引入http模块
const http = require('http');

//2. 配置服务器端口
const port= 8080;

//3. 创建服务器对象
const server = http.createServer((request,response)=>{
    // request请求  response响应

    // 每次接收请求，执行这里的代码
    // 请求一次，执行一次 刷新即是请求
    let url = request.url; // 请求路径获取
    console.log(url)

    // end响应结束执行的代码
    response.end('hello nodejs')
})

//4. 服务器监听，监听浏览器的请求
server.listen(port,(error)=>{
    if(error){
        console.log(error)
        return
    }
    console.log('webServer is'+port);
})