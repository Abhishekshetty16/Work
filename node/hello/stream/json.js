var http=require("http");
var fs=require('fs');

http.createServer(function(req,res){

res.writeHead(200,{"Content-Type":"application/json"})
var jsonObj={
name: "I am ",
surname :"GROOT",
age: 2
};
res.end(JSON.stringify(jsonObj)); ///to convert the data into json use jspon.stringify

}).listen(3000)

console.log("server is runnig groot")