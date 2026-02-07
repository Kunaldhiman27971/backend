require("dotenv").config()// Load environment variables from .env file
const app=require('./src/app')// Import the Express app
const model=require("./src/models/user.model")// Import the user model

const connecttodb=require('./src/config/database')
connecttodb()

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})