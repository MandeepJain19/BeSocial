const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const Post = require('../models/post');
const Admin = require('../models/admin');

router.get("/usersdata", (req,res)=>{
    Users.find({}).populate("post").exec((err,users)=>{
        if(err){
            res.status(400).json("Something went wrong")
        }else{
            res.status(200).json(users)
        }
    })
})
router.get("/post/reported", (req,res)=>{
    Admin.findOne({name: "Admin"}).populate("reportedPost").exec((err,users)=>{
        if(err){
            res.status(400).json("Something went wrong")
        }else{
            res.status(200).json(users)
        }
    })
})



module.exports = router