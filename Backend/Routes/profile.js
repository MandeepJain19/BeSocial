const express = require('express')
const router = express.Router()
const Users = require('../models/users');


router.get("/profile/:username",isLoggedin,(req,res)=>{
    
    Users.findOne({username: req.params.username}).populate("post").exec((err,user)=>{
        if(user){
            //console.log(user)
            console.log("call")
            console.log(user)
            return res.status(200).json(user)
        }else{
            console.log(err)
            return res.status(400).send('Something went wrong')
        }
    })
}) 
router.put("/edit/:username",(req,res)=>{
    res.send("update profile")
})
router.post("/profile/:username",(req,res)=>{
    res.send("delete profile")
})

function isLoggedin(req,res,next){
    if(req.isAuthenticated()) next();
    else return res.status(401).json({message:'Unauthorized Request'});
  }
module.exports = router