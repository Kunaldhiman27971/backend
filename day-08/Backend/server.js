//Server create krna
//Database se connecrt krna 
require("dotenv").config()
const app=require("./src/app");
const connectToDb=require("./src/config/database");

connectToDb();


app.listen (3000,()=>{
    console.log("listening on port 3000")
})

