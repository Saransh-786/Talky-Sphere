const asyncHandler=require('express-async-handler');
const User = require('../Model/UserModel');
const generateToken = require('../Config/generateToken');



const registerUser=asyncHandler(async(req,res)=>{
    const{name, email, password, pic}=req.body;

    if(!name || !email || !password){
        res.send(400);
        throw new Error("Please Enter all filed");
        
    }

    const userExist=await User.findOne({email});

    if (userExist){
        res.send(400);
        throw new Error("User already Exist");
    }

    const user=await User.create({
        name,
        email,
        password,
        pic
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id)
        });
    }
    else{
        res.status(400);
        throw new Error("Failed to create user");
    }
});

module.exports={ registerUser };