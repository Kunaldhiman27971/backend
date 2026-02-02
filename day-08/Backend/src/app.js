const express=require("express");

const app=express()//server create krna



const model=require("./models/note.model")

const cors=require("cors")


app.use(express.json())//middleware to parse json data
app.use(cors())//middleware to handle cors error


//  /api/notes
//Post API for posting a new note:-

app.post("/api/notes",async(req ,res)=>{
    const{name,age,city,role}=req.body;
    const newnote=await model.create({
        name,age,city,role
    })
    res.status(201).json({
        message:"New note created",
        newnote
    })
})

//    /api/notes
//Get API for getting all notes:-

app.get("/api/notes",async(req ,res)=>{
    const note=await model.find()
    res.status(200).json({
        message:"All notes fetched",
        note
    })
})
 

//   /
//Delete API for deleting a note by id:-

app.delete("/api/notes/:id",async(req ,res)=>{
    const id=req.params.id
    await model.findByIdAndDelete(id)

    res.status(200).json({
        message:"Note deleted successfully"
    })
})



// Patch API for updating a note by id:-

app.patch("/api/notes/:id", async(req ,res)=>{
    const id=req.params.id
    const {age,role}=req.body
    await model.findByIdAndUpdate(id,{
        age,role
    })
    res.status(200).json({
        message:"Note updated successfully"
    })
})

module .exports=app;