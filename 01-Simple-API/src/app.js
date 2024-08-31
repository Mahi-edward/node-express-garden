const express = require("express")

const apiV1 = require("./api/v1/routes/index")

// initiate the app
const app = express();

// PORT
const PORT = process.env.PORT || 5000

// middlewares
app.use(express.json())

// Base routes
app.use("/api/v1/",apiV1)


// 404 - Error handling
app.use("*", (req, res, next) => {
    const err = new Error(`Server doesn't contain ${req.originalUrl} URL`)
    err.statusCode = 404;
    next(err)
})


// server request listener
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })