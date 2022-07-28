const express=require('express')
require('./util/db')
const User=require('./util/db')
const app=express()
app.use(express.json())   ///to get json data
app.listen(3000);

// app.get('/',(req,res)=>res.send('testing'))

app.post('/users',async(req,res)=>{
    const user=new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)

    }catch(e){
        res.status(400).send(e.message)
    }
    
})

app.get('/users',async(req,res)=>{
    try{
        const user=await User.find({})
        if(!users)
        return res.status(400).send()
        res.status(200).send(users)
    }catch(e){
        res.status(500).send()
    }
})