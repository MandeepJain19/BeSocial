const Port = 7860;
const express = require('express')
const user = require('./models/users')
const friend = require('./models/friends')
const post = require('./models/post')
const comment = require('./models/comment')
const chat  = require('./models/chat')
const mongoose = require('mongoose')
const app = express()

mongoose.connect("mongodb://localhost/BeSocial", { useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true });


app.get("/",(req,res) =>{
    res.send("Welcome to Besocial")
})


app.listen(Port, (req,res)=>{
    console.log("Server Started on " +Port)
})