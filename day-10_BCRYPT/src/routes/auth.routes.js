
const express = require('express')
const authRouter = express.Router()
const model = require("../models/user.model")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
// api for registration
authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body

    const isUserAlreadyExist = await model.findOne({ email })
    if (isUserAlreadyExist) {
        return res.status(400).json({
            message: "User already exists"
        })
    }
    // password ko hash kar diya hai taki database me plain text me password na store ho or security badh jaye
    const hash = crypto.createHash("md5").update(password).digest("hex")

    const user = await model.create({
        email, password: hash, name
    })

    // JWT token create or token me kbhi bhi sensitive information nahi rakhni chahiye isme sirf user id ya koi aur non sensitive information rakhni chahiye
    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET_KEY,
    )

    res.cookie("jwtoken", token)
    res.status(201).json({
        message: "User registered successfully",
        user,
        token
    })
})


authRouter.post("/protected", (req, res) => {
    console.log(req.cookies);

    res.status(200).json({
        message: "This is a protected route"
    })
})

// api for login  /api/auth/login
// controller function or callback function vo hota hai jo route ke sath execute hota hai jab koi request aati hai us route par

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body

    // check if user exists or not
    const user = await model.findOne({ email })
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }
    // password match karna hai ya nahi ye check karna hai taki agar password match nahi karta hai to user ko unauthorized access na mile

    const isPasswordMatch = user.password === crypto.createHash("md5").update(password).digest("hex")

    if (!isPasswordMatch) {
        return res.status(401).json({
            message: "Invalid password"
        })
    }
    // JWT token create kiya hai or 
    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET_KEY
    )
    // token ko cookie me store kar diya hai taki client side par use kiya ja sake
    res.cookie("jwtoken", token)
    // login hone ke baad user ki information ko response me bhej diya hai taki client side par use kiya ja sake
    res.status(200).json({
        message: "User logged in successfully",
        user
    })
})


module.exports = authRouter
//app.js ke alawa agar kisi file me routes banate hai to us file me express.Router() ka use krte hai aur us router ko export kr dete hai taki app.js me use kr ske