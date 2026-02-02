const express=require('express');

const app=express();

app.use(express.json())

const model=require('./models/notes.model');


// Post API to create a note
app.post("/notes",async(req ,res)=>{
    const{name,role,age}=req.body;
    const note=await model.create({
        name,role,age
    })
    res.status(201).json({
        message:"note created",
        note
    })
})



// Get API to fetch all notes

app.get("/notes",async(req ,res)=>{
    const note= await model.find()// fetch all notes from db

    res.status(200).json({
        messade:"all notes fetched",
        note
    })

})





module.exports=app;