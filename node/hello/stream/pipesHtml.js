//html
var http=require("http");
var fs=require('fs')

http.createServer(function(req,res){


    res.writeHead(200,{'Content-Type':'text/html'});
    var readStream = fs.createReadStream('index.html','utf8');
    readStream.pipe(res);    
}).listen(3000);

console.log("server is running")
