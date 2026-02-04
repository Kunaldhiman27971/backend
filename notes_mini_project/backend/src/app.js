// server ko start krna 
// server ko configure krna

const express = require("express")
const model = require("./models/note.model")


const app = express()
app.use(express.json())// middleware

// post /api/employee 
// create new empolyee and save data to mongodb

app.post("/api/employee", async (req, res) => {
    const { name, position, salary } = req.body
    const employee = await model.create({ name, position, salary })
    res.status(201).json({
        message: "employee created successfully",
        employee
    })
})


// get /api/employee
// get all employee data from mongodb

app.get("/api/employee", async (req, res) => {
    const employee = await model.find()
    res.status(200).json({
        message: "employee data fetched successfully",
        employee
    })
})


// delete /api/employee/:id
// delete employee data from mongodb

app.delete("/api/employee/:id", async (req, res) => {
    const { id } = req.params
    await model.findByIdAndDelete(id)
    res.status(200).json({
        message: "employee data deleted successfully"
    })
})


// patch /api/employee/:id
// patch use to update some part of the resource


app.patch("/api/employee/:id", async (req, res) => {
    const { id } = req.params
    const { salary } = req.body
    await model.findByIdAndUpdate(id, { salary })
    res.status(200).json({
        message: "employee data updated successfully"
    })
})
module.exports = app

