var fs=require('fs'); ///filesystem read write...

//var read_string=fs.readFileSync('fs.txt',"utf8")    //allows to read file synchronously

// console.log(read_string);

// fs.writeFileSync('fs2.txt',read_string);   //write the file synchronously
 //it takes filename,data

 ///asynchronous
 var read_string=fs.readFile('fs.txt',"utf8",function(err,data){ //takes file name,function(error,data)
     if(err)
    return console.error(err);
     console.log(data); ///callback functions(error,data)
 }) ;   //allows to read file asynchronously
    
console.log('file is read');

fs.writeFile("fs3.txt",read_string, function (err, data) {
    if (err)
    return console.error(err);
    console.log("success");
});

