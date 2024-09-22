const mongoose=require('mongoose')

const userModel=mongoose.Schema({
    name:{
        type:String,trim:true
    },
    email:{
        type:String,require:true,unique:true
    },
    password:{
        type:String,require:true
    },
    Pic:{
        type:String,require:true,default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },

},
{
    timestamps:true,
});

const User=mongoose.model("User",userModel);
module.exports=User;