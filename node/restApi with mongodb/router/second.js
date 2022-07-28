const express=require("express")
const router=express.Router()



router.use('/',(req,res,next)=>{
    console.log('second middleware')
    res.send(`<h1>hello from Express</h1>`)
})

module.exports=router