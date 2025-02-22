const express = require('express')
const aiRoutes= require('./routes/ai.routes')

const app= express();
app.get('/',(req,res)=>{
    console.log("server is running")
    res.send("hi there");
})
app.use('/ai',aiRoutes)
module.exports=app