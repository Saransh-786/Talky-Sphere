import mongoose from "mongoose";

const mongoose = require(mongoose)
const ChatModel=mongoose.Schema(
    {
        chatName: {type:String, trim:true},
        isGroup:{type:Boolean, default:false},
        users:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }],
        latestMessages:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Messages",
        },

        GroupAdmin:{type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    },
    {
        timestamps:true,
    }


);

const Chat= mongoose.model("Chat",ChatModel);

module.exports=Chat;



//ChatName
//isGroup
//users
//latestMesages
//GroupAdmin