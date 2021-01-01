const express = require('express');
const router = express.Router();
const user = require('../models/users');
const md5 = require('md5');
const Multer = require('multer');
const path = require('path');

let storage = Multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, path.join(__dirname, '../public/profileImage' ));
    },
    filename : function(req, file, cb){
        cb(null, file.originalname + '.png' );
    }}
);

let upload = Multer({ storage: storage })


router.post("/signup", upload.single('file'),(req,res)=>{
    console.log(req);
    console.log(req.file)
    
    //console.log(md5(req.body.password));
    let userData = new user({
        name : req.body.name,
       // password: md5(req.body.password) ,
        username: req.body.Username,
        profileImg: req.file,
        email: req.body.email,
        profileImg : req.body.url,
        DOB: req.body.date,
    });
    //console.log(req.body);
   // console.log(userData); 
    userData.save((err, data) =>{
        if(err){
            console.log(err)
        }else{
            console.log("saved")
            res.status(201).json(data)
        }
    })
   
})

router.post("/login", (req,res)=>{
    res.send("post login")
})

router.post("/newpassword/:username", (req,res)=>{
    res.send("post login")
})

module.exports = router