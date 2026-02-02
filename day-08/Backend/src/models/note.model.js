const mongoose = require("mongoose");

const noteSchema=new mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    role:String
})

const notemodel=mongoose.model("note",noteSchema);

module.exports=notemodel;