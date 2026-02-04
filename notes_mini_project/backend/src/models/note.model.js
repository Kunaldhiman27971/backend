const mongoose=require("mongoose")

const noteSchema=new mongoose.Schema({
    name:String,
    position:String,
    salary:Number
})

const note=mongoose.model("note",noteSchema)

module.exports=note