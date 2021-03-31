const Port = 7860;
const http = require('http')
const express = require('express')
const Users = require('./models/users')
const Post = require('./models/post')
const comment = require('./models/comment')
const Chat  = require('./models/chat')
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

const socketio = require("socket.io");
const User = require('./models/users');
const chat = require('./models/chat');
const app = express()
const server = http.createServer(app)
const io = socketio(server)
app.set('socketio', io);

let userList = []
io.on('connection', (socket) =>{
  console.log("connected")
  console.log(socket.name)

  

  socket.on('join', (username)=>{
    console.log(username.username)
    socket.join(username.username);
    userList.push(username.username)
    io.emit('onlineUsers',userList)
  })

  //incoming message
  socket.on('onClientMsg', (msg)=>{
    console.log(msg)

   let chat = new Chat({
      sendername : msg.from,
      receivername : msg.to,
      message : msg.msg,
      time : msg.time
    })
    chat.save((err,data)=>{
      if(err){
    console.log(err)
      }else{
        console.log(data)
        io.sockets.in(msg.from).emit('onServerMsg',chat)
      }
    })
    
    //socket.broadcast.emit('onServerMsg', msg.msg)
     //socket.broadcast.to(msg.to).emit('onServerMsg', msg)
    })
    console.log(userList)
    
  })


app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200'],
    credentials:true
  }));



mongoose.connect("mongodb+srv://mandeepjain:8982152230@cluster0.pktvv.mongodb.net/BeSocial?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true });

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




server.listen(Port, (req,res)=>{
    console.log("Server Started on " +Port)
})

