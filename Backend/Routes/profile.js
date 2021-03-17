const express = require('express')
const router = express.Router()
const Users = require('../models/users');
const Multer = require('multer');
const path = require('path');
const User = require('../models/users');

let storage = Multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, path.join(__dirname,'../public/profile image'));
    },
    filename : function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname) );
    }}
);

let upload = Multer({ storage: storage })

router.get("/profile/:username",isLoggedin,(req,res)=>{
    
    Users.findOne({username: req.params.username}).populate("post").populate("followingList").populate("followersList").exec((err,user)=>{
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
router.put("/profile/edit/:username",(req,res)=>{
    User.findOne({username : req.params.username}, (err,user)=>{
        if(err){
            return res.status(400).send('Something went wrong')
        }else{
            if(!user){
                return res.status(400).send('Something went wrong')
            }else{
                user.name = req.body.Name
                user.profession = req.body.Profession
                user.bio = req.body.bio
                user.save((err, data)=>{
                    if(err){
                        return res.status(400).send('Something went wrong')
                    }else{
                        console.log("done")
                        return res.status(200).send(user)
                    }
                })
            }
    
        }
    })
})

router.post("/profile/:username",(req,res)=>{
    res.send("delete profile")
})

function isLoggedin(req,res,next){
    if(req.isAuthenticated()) next();
    else return res.status(401).json({message:'Unauthorized Request'});
  }
module.exports = router