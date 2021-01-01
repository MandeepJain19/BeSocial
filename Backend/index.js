const Port = 7860;
const express = require('express')
const user = require('./models/users')

const post = require('./models/post')
const comment = require('./models/comment')
const chat  = require('./models/chat')
const mongoose = require('mongoose')

const friendsRoutes = require('./Routes/Friends')
const loginSignupRoutes = require('./Routes/LoginSignUp')
const profileRoutes = require('./Routes/profile')
const postRoutes = require('./Routes/post')
const chatsRoutes = require('./Routes/chats')
const bodyParser = require("body-parser");//use for get data from form
const md5 = require('md5');
const cors = require('cors')
const path = require('path');
const app = express()

app.use(cors());

mongoose.connect("mongodb://localhost/BeSocial", { useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));//use for get data from form
app.use(express.static(__dirname));
app.use('/',loginSignupRoutes,friendsRoutes,profileRoutes,postRoutes,chatsRoutes)



//console.log(md5("Hello"))

app.listen(Port, (req,res)=>{
    console.log("Server Started on " +Port)
})