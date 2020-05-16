/*
1.http - 作用 - 搭建服务器，搭建http服务，接受请求处理请求，并响应

每次更改都需要重启服务，
-解决方案-安装nodemon包
npm install -g nodemon
*/

//1. 引入http模块
const http = require('http');
const url = require('url');

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
    let obj = url.parse(requesturl,true);
    console.log(obj.query.page)

    // end响应结束执行的代码
    response.write('11111<br/>')
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