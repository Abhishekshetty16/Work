var events=require("events");

// var eventEmitter= new events.EventEmitter();  //we can create an event e should be capital for eventemitter

// eventEmitter.on('clicked',function(button){  //here clicked is an event key
// console.log(button+" is clicked")
// })

// eventEmitter.emit('clicked','button 1'); //here button 1 value is given to the function button ..


var util =require("util");  //The node. js "util" module provides some functions to print formatted strings as well as some 'utility' functions that are helpful for debugging purposes.

var Students=function(name){
    this.name=name;
}
util.inherits(Students,events.EventEmitter);

var max=new Students('max');
max.on('scored',function(marks){
    console.log(max.name+'scores'+marks)
})
max.emit('scored',100);


var tom=new Students('tom');
tom.on('scored',function(marks){
    console.log(tom.name+'scores'+marks)
})
tom.emit('scored',52);