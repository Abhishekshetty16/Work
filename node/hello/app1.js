//settimeout example
// setTimeout (function(){
// console.log('3 sec ')
// },3000);

//setinterval example
// var time = 0;
// var timer = setInterval (function(){
//     time +=2;
//     console.log(time + 'sec have passed')
//     clearInterval(timer)
//     if(time > 7){
//     }
//     },200);

//console.log(__dirname);  ///current directory name
// console.log(__filename)  ///current location of file


var hello=require("./hello.js"); //importing custom module

console.log(hello.sayHelloInEnglish());
console.log(hello.sayHelloInSpanish());
    