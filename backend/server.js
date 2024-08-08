
const express = require("express");
const { chats } = require("./data/data");

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

app.listen(5000,()=>{
    console.log("Server started on 5000");
});