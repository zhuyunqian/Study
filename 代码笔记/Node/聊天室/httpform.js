var http = require('http');  // 倒入模块http

http.createServer(function(req,res){

    console.log(req.method);
    //console.log(res);
    if(req.method == "GET"){
        getreq(req,res);
    }else if(req.method == "POST"){
	postreq(req,res);
    }else{
        postreq(req,res)
    }
    res.end();   //结束语句，必须书写

}).listen(8800,'127.0.0.1')

function getreq(req,res){


    res.writeHead(200,{'Content-Type':'text-html'}); //请求头，给浏览器观看
    res.write('<html charset="utf-8">');  //输出html
    res.write('<head>');
    res.write('</head>');
    res.write('<body>');
    res.write('<form method="get">');
    res.write('username: <input name="username" type="text">');
    res.write('password: <input name="password" type="password">');
    res.write('<input type="submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    res.end();    
}

function postreq(req,res){
    
    res.write('success');
    res.end();

}
