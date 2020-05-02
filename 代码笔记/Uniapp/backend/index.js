// 引入依赖 express 直接粘贴笔记上代码
const express = require("express");// 什么是const，就是用来声明常量的
const fs = require("fs");// fs模块是nodeJs中自带的模块，用于读取文件
const app = express();//express 自执行一次 并赋值给app
//设置跨域访问,这个跨域加上去就可以解决在浏览器上看页面了
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// 监听路由
app.get('/mydata', function(req, res){
   // request代表请求，resspond代表响应
   //fs.readFile(url,callback(err,data))
   fs.readFile("./houseSource.json",function(err,data){
	   if(err) return;
	   res.send(JSON.parse(data));
   })
    
});
// 测试、监听端口号
app.listen(8002, ()=>{
    console.log('Server is running at http://localhost:8002');
})