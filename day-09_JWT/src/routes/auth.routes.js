
const express=require('express')
const authRouter=express.Router()
const model=require("../models/user.model")
const jwt=require("jsonwebtoken") 
// api for registration
authRouter.post("/register",async (req ,res)=>{
    const {name,email,password}=req.body
    
    const isUserAlreadyExist=await model.findOne({email})
    if(isUserAlreadyExist){
        return res.status(400).json({
            message:"User already exists"
        })
    }
    const user=await model.create({
        email , password , name
    })
    const token=jwt.sign(
        {
        id:user._id,
        emial:user.email
        },
        process.env.JWT_SECRET_KEY,
)

res.cookie("jwtoken",token)
    res.status(201).json({
        message:"User registered successfully",
        user,
        token
    })
})

module.exports=authRouter
//app.js ke alawa agar kisi file me routes banate hai to us file me express.Router() ka use krte hai aur us router ko export kr dete hai taki app.js me use kr ske