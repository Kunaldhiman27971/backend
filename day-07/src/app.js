

const express = require("express")
const model = require("./models/notes.model")

const app = express()
//middlewar

app.use(express.json());

// Post API for notes

app.post("/notes", async (req, res) => {
    const { title, description, age } = req.body
    const note = await model.create({
        title, description
    })
    res.status(201).json({
        message: "note created",
        note
    })
})


// Get API for notes

app.get("/notes", async (req, res) => {
    const notes = await model.find()
    res.status(200).json({
        message: "all notes",
        notes
    })
})

// Delete API for notes





module.exports = app


