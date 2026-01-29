/*

-server create krna
-server ko config krna

*/


const express=require("express")

const app=express() //server create ho gya


app.use(express.json()) //json data ko read krne k liye middleware use krte hai express.json()


const notes=[]



// Post method ka use krke data bhejna

app.post('/notes',(req ,res)=>{
    console.log(req.body)
    notes.push(req.body)

    console.log(notes)

    res.send("note received")
})



// Get meyhod ka use krke data lena

app.get("/notes",(req,res)=>{
    res.send(notes)
})


// Delete method ka use krke data delete krna
// params: jb client ko server ko kuch specific data delete krna hota hai to hum params ka use krte hai
//delete /notes/0

app.delete("/notes/:index",(req ,res)=>{
    delete notes[req.params.index]
    res.send("note deleted")
})

//patch(/notes/:index) method ka use resource ke kisi part ko update krne ke liye krte hai 

// req.body={description:"new description"}

app.patch("/notes/:index",(req ,res)=>{
    notes [req.params.index ].description=req.body.description
    res.send("note updated")
})

module.exports=app