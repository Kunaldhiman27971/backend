const app=require("./src/app")

const database=require("./src/config/databse")




database()

app.listen(3000,()=>{
    console.log("listening on port 3000")
})