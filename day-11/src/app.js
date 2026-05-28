import express from "express";
import authRouter from "./routes/auth.routes.js"
import handleError from "./middleware/error.middleware.js"

const app= express()
app.use(express.json()) // Middleware to parse JSON request bodies

app.use("/api/auth",authRouter)



app.use(handleError) // Global error handling middleware it is used in the last because it will catch all the errors that are thrown in the routes and controllers and it will send the response to the client with the error message and status code 500
export default app