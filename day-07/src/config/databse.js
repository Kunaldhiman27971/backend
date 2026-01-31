const mongoose = require("mongoose");

function databseConnection(){
    mongoose.connect("mongodb+srv://kunaldhiman27971_db_user:eTnFTh9hoQ4WAF2W@cluster0.qx0jeov.mongodb.net/day-7")
    .then(()=>{
        console.log("connected to database")
    })
}

module.exports=databseConnection