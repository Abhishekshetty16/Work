//pipe helps mostly in reading file..
//Node. js has a built-in module called HTTP, which allows Node. js to transfer data over the Hyper Text Transfer Protocol (HTTP). To include the HTTP module

var http=require("http");
var fs=require('fs')

http.createServer(function(req,res){


    res.writeHead(200,{'Content-Type':'text/plain'});
    var readStream = fs.createReadStream('file.txt','utf8');
    readStream.pipe(res);    
}).listen(3000);

console.log("server is running")
