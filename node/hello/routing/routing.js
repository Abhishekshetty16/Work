var http = require("http");
var fs = require('fs');

http.createServer(function (req, res) {
    console.log('requested url:' + req.url);
    if (req.url === "/home" || '/') {
        res.writeHead(200, { "Content-Type": "text/html" })
        fs.createReadStream('index.html').pipe(res);
    } else if (req.url === '/api') {
        res.writeHead(200, { "Content-Type": "application/json" })
        var jsonObj = {
            name: "I am ",
            surname: "GROOT",
            age: 2
        };
        res.end(JSON.stringify(jsonObj)); ///to convert the data into json use jspon.stringify

    } else  if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" })
        fs.createReadStream('about.html').pipe(res);
    } else {
        res.writeHead(404, { "Content-Type": "text/html" })
        fs.createReadStream('404.html').pipe(res);
    }


}).listen(3000)

console.log("server is runnig groot on http://127.0.1:3000/")