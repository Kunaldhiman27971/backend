Cluster:-is combination of storage  and processor.


Cloud we are using is -Mongodb Atlas


Mongodb me bahut sare database ke server create kiye or alag alag location pe place kr diya hai 

Hm india ki loaction wale server pe ek chota sa storage or processor lenge apne application ke liye isi ke liye or hm ise connect krne ke liye mongodb compass ka use krte hain.




//server ko start krna 

//database se connect krna


const app = require("./src/app");

const mongoose = require("mongoose");

function db() {
    mongoose.connect("mongodb+srv://kunaldhiman27971_db_user:eTnFTh9hoQ4WAF2W@cluster0.qx0jeov.mongodb.net/?appName=Cluster0/day-6")
            .then(() => {
            console.log("Connected to Database")
        })
        
}
db()

app.listen(3000, () => {
    console.log("listening on port 3000")
})
