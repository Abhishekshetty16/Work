var http=require("http"); ///http is used

http.createServer(function(req,res){
    var body="this is the body of response";
    var content_length= body.length;
    res.writeHead(200,{
        "Content-Type":"text/plain",
        "Content-Length":content_length
    });
res.end("hello Node\n");
}).listen(3001);

console.log(`server is running on 3001 port`)