var net = require('net');
var hostname = process.argv[2];
var portname = process.argv[3];
var client = net.connect({port:portname,host:hostname}, 
function() {
   console.log('连接到服务器！');  
   process.stdin.setEncoding('utf8');

   process.stdin.on('readable', () => {
   let chunk;
   // Use a loop to make sure we read all available data.
   while ((chunk = process.stdin.read()) !== null) {
           client.write(`data: ${chunk}`);
       }
   });	
});
client.on('data', function(data) {
   console.log(data.toString());
   //console.log('1233')
   //client.end();
});
client.on('end', function() { 
   console.log('断开与服务器的连接');
});
