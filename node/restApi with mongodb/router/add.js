const express=require("express")
const router=express.Router();

router.use('/add',(req,res,next)=>{             ///when we use localhost...3000/add
    console.log("First middleware")
res.send(`<form action="products" method="POST"><input type="text" name="title">
<button>Submit</button></form>`)
});

router.use('/products',(req,res,next)=>{   
    console.log(req.body);    
    res.redirect("/");  
})

module.exports=router