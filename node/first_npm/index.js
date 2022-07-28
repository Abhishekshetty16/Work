var express=require('express');

var app=express();

app.set('view engine','ejs');

app.listen(3000 ,function(){
    console.log('server is running')
})

//get

app.get('/',function(req,res){
res.send('get')
})

    app.get('/error',function(req,res){
        res.send('error404')
        })

        
    app.get('/student/:id',function(req,res){  //here we took id
        res.send('you have requested for '+req.params.id) ///res give the response &re.params.id gives requested id response..
        })
 app.get('/students/:name',function(req,res){  ///here we tool name
    res.send('i am '+req.params.name);
 })

 var userTable={
    1:"abhi",
    2:"groot",
    3:"arun"
 }
 app.get("/user/:id",function(req,res){
    res.send('hello user :'+userTable[req.params.id]) //took input from json data
 })
        

 app.get('/about',function(req,res){
    res.sendFile(__dirname +'/index.html'); //sendfile help us to send files to web
    })

 var stu={
    1:"a",
    2:"b",
    3:"c"
 }   
 app.get('/stu/:id',function(req,res){
    res.render('students',{name:stu[req.params.id],id:req.params.id}); //here students is a view file name..
 })

 var stud={
    1:{
        name:"abhi",
        subjects:['c','c++']
    },
    2:{
        name:"ajit",
        subjects:['python','c++']
    },
    3:{
        name:"arun",
        subjects:['c','typescript']
    }
 }   
 app.get('/stud/:id',function(req,res){
    res.render('students',
    {name:stud[req.params.id].name,
    id:req.params.id,
    subjects:stud[req.params.id].subjects}); //here students is a view file name..
 })
//post
//put
//delete