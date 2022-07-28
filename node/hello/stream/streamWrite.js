
var fs=require('fs')

var readStream = fs.createReadStream('file.txt','utf8');  /// creating read stream it inherits from event emmiter


var writeStream =fs.createWriteStream('write_file.txt'); //creating write stream it inherits from event emiter
readStream.on('data',function(chunk){
    console.log('.------------------- start------------------------');
    writeStream.write(chunk);
})

readStream.on('end',function(chunk){
    console.log('.--------------------- end  ----------------------');
})