
//server ko start krna 

//database se connect krna


const app = require("./src/app");

const mongoose = require("mongoose");

function db() {
    mongoose.connect("mongodb+srv://kunaldhiman27971_db_user:eTnFTh9hoQ4WAF2W@cluster0.qx0jeov.mongodb.net/?appName=Cluster0/day-6")
            .then(() => {
            console.log("Connected to Database")
        })
        .catch((err) => {
            console.log("Database Connection Error:", err)
        })
}
db()

app.listen(3000, () => {
    console.log("listening on port 3000")
})
