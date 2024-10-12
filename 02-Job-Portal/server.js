const express = require("express")

const app = express()

app.get("/", (req, res) => {
    console.log("Get Request")
    res.send("<h1>Home Page</h1>")
})


// server listening
app.listen(8080, () => console.log("Server running on port 8080"))