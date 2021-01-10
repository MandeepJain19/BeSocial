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
const passport = require('passport');
const session = require('express-session');
const router = require('./Routes/LoginSignUp');

const app = express()

app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200'],
    credentials:true
  }));

mongoose.connect("mongodb://localhost/BeSocial", { useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true });
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));//use for get data from form



//passport & session config
app.use(session({
  name:'myname.sid',
  resave:false,
  saveUninitialized:false,
  secret:'secret',
  cookie:{
    maxAge:36000000,
    httpOnly:false,
    secure:false
  },
  //store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());
//router.use(passport.initialize)
//console.log(md5("Hello"))


app.use('/',loginSignupRoutes,friendsRoutes,profileRoutes,postRoutes,chatsRoutes)
app.listen(Port, (req,res)=>{
    console.log("Server Started on " +Port)
})