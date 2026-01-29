const express=require("express")

const app=express()  //server instance bnaya

app.use(express.json())  //Middleware to parse JSON bodies iske bina req.body undefined aayega server req.body ko read nhi kr payega


const notes=[]

app.post("/notes",(req,res)=>{
    console.log(req.body)

    notes.push(req.body)  // jo bhi data client se aayega usko notes array me push krdo

   res.send("Note received")
})


app.get("/notes",(req,res)=>{
    res.send(notes)  // notes array ko client ko bhejdo
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})  // server ko port 3000 pr start krdia