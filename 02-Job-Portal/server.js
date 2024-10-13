// import modules
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";

// config the .env
dotenv.config();

// Connect DB
connectDB()


const app = express()

app.get("/", (req, res) => {
    console.log("Get Request")
    res.send("<h1>Home Page</h1>")
})

// PORT 
const PORT = process.env.PORT || 8080


// server listening
app.listen(PORT, () => console.log(`Server is running ${process.env.MODE} mode on port ${PORT}`))

// https://www.conventionalcommits.org/en/v1.0.0/