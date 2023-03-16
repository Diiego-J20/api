const express = require("express")
const mongoose = require("mongoose")
const user = require("./user.controller")
const res = require("express/lib/response")
const app = express()
const port = 3000

app.use(express.json())
mongoose.connect('mongodb+srv://diego:diego3124@cluster0.7knqtx7.mongodb.net/?retryWrites=true&w=majority')

app.get("/users", user.list)
app.post("/users", user.create) //Esta es la línea que me dijiste
app.get("/users/:id", user.get)
app.put("/:id", user.update)
app.patch("/users/:id",user.update)
app.delete("/users/:id", user.destroy)

app.use(express.static("app"))

app.get("/", (req, res) => {
    console.log(__dirname)
    res.sendFile("${__dirname}/index.js")
})


app.get("*", (req, res) => {
    res.status(404).send("Esta página no existe")
})

app.listen(port, () => {
    console.log("Arrancando la app")
})