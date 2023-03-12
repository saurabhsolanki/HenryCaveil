const express = require('express')
const { default: mongoose } = require('mongoose')
const AuthData = require("./route/user.route")
const UserData = require("./route/userData.route")
require("./config/db")
const cors =require("cors")

const app= express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

app.get('/', (req,res)=> res.send('hello'))
app.use("/user",AuthData)
app.use("/userData", UserData)
// app.use("/cart",CartDat)


// mongoose.set('strictQuery', false);
app.listen(8080, async() => {
    console.log('server started on port 8080')
})