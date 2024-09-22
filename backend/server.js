const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB=require("./Config/Db")

dotenv.config();

connectDB();
const app=express()



app.get('/',(req,res)=>{
    res.send("Api is running");
});

app.get('/api/chat',(req,res)=>{
    res.send(chats);
});


//to find single chat in data
app.get('/api/chat/:id',(req,res)=>{
    const singlechat=chats.find((c)=>c._id==req.params.id);
    res.send(singlechat);
})

const PORT = process.env.PORT || 5000
app.listen(5000,()=>{
    console.log(`Server started on PORT ${PORT}`);
});