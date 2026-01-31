const mongoose = require("mongoose");

const noteSchema=new mongoose.Schema({
    title:String,
    description:String,
    age:Number
})


const noteModel=mongoose.model("notes",noteSchema)//colleaction name is notes in this. 

module.exports=noteModel;

