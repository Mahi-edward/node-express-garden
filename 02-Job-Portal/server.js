// packages import
import express from "express"
import "express-async-errors"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan";

// files import
import connectDB from "./config/db.js";

// routes import
import testRoutes from "./routes/testRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import errorMiddleware from "./middlewares/errorMiddleware.js";

// config the .env
dotenv.config();

// Connect DB
connectDB()

const app = express()



// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


// routes
app.use("/api/v1/test", testRoutes)
app.use("/api/v1/auth", authRoutes)


// validation middleware
app.use(errorMiddleware)


// PORT 
const PORT = process.env.PORT || 8080


// server listening
app.listen(PORT, () => console.log(`Server is running ${process.env.MODE} mode on port ${PORT}`))

// https://www.conventionalcommits.org/en/v1.0.0/