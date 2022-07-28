// exports.sayHelloInEnglish=function() {
//     return 'HELLO';
// }
// ///exporting self module or function

// exports.sayHelloInSpanish=function() {
//     return 'HOLA';
// }.
var hello= {
sayHelloInEnglish:function() {
    return 'HELLO';
},
///exporting self module or function
sayHelloInSpanish:function() {
    return 'HOLA';
}
}
module.exports=hello;