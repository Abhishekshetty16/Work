//They are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.
//Using streams you read it piece by piece, processing its content without keeping it all in memory.


var fs=require('fs')

var readStream = fs.createReadStream('file.txt','utf8');  /// creating read stream it inherits from event emmiter
readStream.on('data',function(chunk){
    console.log('.------------------- start------------------------');
    console.log(chunk);
})

readStream.on('end',function(chunk){
    console.log('.--------------------- end  ----------------------');
})