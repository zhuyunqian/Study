// http服务 -- web服务器
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request,response)=>{
    let requesturl = request.url;
    if(requesturl == '/' || requesturl == '/index.html'){
        let content = fs.readFileSync(path.join(__dirname,'assets','index.html'))
        response.end(content)
    }else if(requesturl == '/list.html'){
        let content = fs.readFileSync(path.join(__dirname,'assets','list.html'))
        response.end(content)
    }else if(requesturl.indexOf('.css') > -1){
        console.log(requesturl)
        let content = fs.readFileSync(path.join(__dirname,'assets',requesturl))
        response.end(content)
    }else{
        let content = fs.readFileSync(path.join(__dirname,'assets','error.html'))
        response.end(content)
    }
    
})

const port = 8888;
server.listen(port,(error)=>{
    console.log(error)
    console.log(port)
})
