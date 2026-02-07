const express=require('express')

const authRouter=require('./routes/auth.routes')// Import the auth routes
const cookies=require("cookie-parser")// Import cookie-parser middleware
const app=express()

app.use(express.json())//middleware to parse JSON request bodies isse hm req.body me data access kr skte hai
app.use(cookies())// Use cookie-parser middleware to parse cookies in incoming requests

app.use("/api/auth", authRouter)// ye middleware hai jo /api/auth path par aane wale requests ko authRouter ke paas bhejta hai authRouter me humne registration ka route banaya hai to jab bhi koi /api/auth/register par request bhejega to wo authRouter ke andar register route par jayega aur waha se registration process complete hoga

module.exports=app