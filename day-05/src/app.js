const express = require("express");

const app = express()


const notes = []


app.use(express.json())

// get notes
app.get("/notes", (req, res) => {
    res.send(notes)
    res.status(200).json({
        notes: notes
    })
})

// for creating a new resource we use status code 201
// add note
app.post("/notes", (req, res) => {
    notes.push(req.body)
    res.status(201).json({
        message: "note created successfully"
    })
})

// delete note
app.delete("/notes/:index", (req, res) => {
    delete notes[req.params.index]
    res.status(200).json({
        message: "note deleted successfully"
    }) 
})

//modify note
app.patch("/notes/:index",(req ,res)=>{
    notes[req.params.index].description=req.body.description
    res.status(200).json({
        message:"note updated successfully"
    })
})


module.exports = app

