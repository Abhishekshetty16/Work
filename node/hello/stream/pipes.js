//The readable.pipe() method in a Readable Stream is used to attach a Writable stream
// to the readable stream so that it consequently switches into flowing mode and then pushes all the data
// that it has to the attached Writable. 

var http=require("http");
var fs=require('fs')

var readStream = fs.createReadStream('file.txt','utf8'); 
 /// creating read stream it inherits from event emmiter


var writeStream =fs.createWriteStream('write_file.txt'); 
//creating write stream it inherits from event emiter

//pipe can only be used by readablestream

readStream.pipe(writeStream);
