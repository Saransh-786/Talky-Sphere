const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB=require("./Config/Db")
const userRoutes=require("./Routes/UserRoutes")

dotenv.config();

connectDB();
const app=express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("Api is running");
});

app.use('/api/user',userRoutes)

const PORT = process.env.PORT || 5000
app.listen(5000,()=>{
    console.log(`Server started on PORT ${PORT}`);
});