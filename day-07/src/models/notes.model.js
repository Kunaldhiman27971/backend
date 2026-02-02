const mongoose=require('mongoose');

const noteSchema=new mongoose.Schema({
    name:String,
    role:String,
    age:Number
})

const noteModel=mongoose.model("notes",noteSchema)

module.exports=noteModel