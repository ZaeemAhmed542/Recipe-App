const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const userRouter = require("./server/data/db/userController")
const cors = require("cors")
const app = express()
app.use(cors())
const PORT = 4400

mongoose.connect("mongodb://localhost/RecipeApp",{useNewUrlParser: true})
.then(() => console.log("connected"))
.catch((err) => console.log("couldn't connect to mongodb"))

app.use(bodyParser.json())

app.use('/user',userRouter)

app.listen(PORT)