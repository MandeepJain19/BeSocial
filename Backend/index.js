const Port = 7860;
const express = require('express')
const user = require('./models/users')
const friend = require('./models/friends')
const post = require('./models/post')
const comment = require('./models/comment')
const chat  = require('./models/chat')
const mongoose = require('mongoose')
const homeRoutes = require('./Routes/home')
const friendsRoutes = require('./Routes/Friends')
const loginSignupRoutes = require('./Routes/LoginSignUp')
const profileRoutes = require('./Routes/profile')
const postRoutes = require('./Routes/post')
const chatsRoutes = require('./Routes/chats')
const app = express()

mongoose.connect("mongodb://localhost/BeSocial", { useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true });

app.use('/BeSocial', homeRoutes,loginSignupRoutes,friendsRoutes,profileRoutes,postRoutes,chatsRoutes)





app.listen(Port, (req,res)=>{
    console.log("Server Started on " +Port)
})