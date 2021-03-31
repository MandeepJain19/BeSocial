const express = require('express')
const router = express.Router()
const User = require('../models/users')
const Chat = require('../models/chat')

router.get("/chat/user",isLoggedin, (req,res)=>{

    console.log(req.user.username)
    User.findOne({username : req.user.username}).populate("followingList").populate("followersList").exec((err,user)=>{
        if(err){
            return res.status(400).send("User not found")
        }else{
            if(!user){
                return res.status(400).json("User not found")
            }else{
                return res.status(200).json(user)
            }
            
        }
    })

})

router.get("/message/:sender/:receiver",(req,res)=>{
console.log("sender"+req.params.sender)
console.log("receiver"+req.params.receiver)
    // Chat.find({sendername : req.params.sender || req.params.receiver , receivername: req.params.sender || req.params.receiver }).sort({dateTime : 1}).exec((err,chats)=>{
        Chat.find({
            $or: [
            {$or: [{sendername : req.params.sender}, {sendername :req.params.receiver}]}, {$or: [{sendername :req.params.receiver }, {sendername :req.params.sender  }]}]}).sort({dateTime : 1}).exec((err,chats)=>{

    if(err){
            res.status(400).send("no chat Found")
        }else{
            console.log(chats)
            res.status(200).json(chats)

        }
    })

})
router.post("/message/:username",(req,res)=>{
    res.send("send message")
})
router.post("/messages",(req,res)=>{
    res.send("message to all")
})
function isLoggedin(req,res,next){
    if(req.isAuthenticated()) next();
    else return res.status(401).json({message:'Unauthorized Request'});
  }
module.exports = router