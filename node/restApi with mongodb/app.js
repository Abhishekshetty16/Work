const express=require("express")
const app=express();

const add=require('./router/add')
const second=require('./router/second')
 // express.urlencoded is a build in middleware is used to show data 
app.use(express.urlencoded({extended:true}))  

app.use(add)
app.use(second)


app.listen(3000)




//middelware request,response,next..

// app.use('/add',(req,res,next)=>{             ///when we use localhost...3000/add
//     console.log("First middleware")
// res.send(`<form action="products" method="POST"><input type="text" name="title">
// <button>Submit</button></form>`)
// });

// app.use('/products',(req,res,next)=>{   
//     console.log(req.body);    
//     res.redirect("/");  
// })
// app.use('/',(req,res,next)=>{
//     console.log('second middleware')
//     res.send(`<h1>hello from Express</h1>`)
// })
