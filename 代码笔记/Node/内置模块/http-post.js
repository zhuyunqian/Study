const http = require('http');
const port = 8082;

const server = http.createServer((request,response)=>{

    // request on data事件 如果是post请求，执行操作
    request.on("data",(postData)=>{
        console.log(postData.toString())
    })


    response.end("THE END");
})

server.listen(port,(error)=>{
    if(error){
        console.log(error);
        return
    }
    console.log("server is https://localhost/"+port);
})