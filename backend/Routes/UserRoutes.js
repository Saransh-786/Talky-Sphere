const express=require('express');
const { registerUser } = require('../Controller/UserController');

const router=express.Router()

router.route("/").post(registerUser)


module.exports=router;