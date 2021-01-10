const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const md5 = require('md5');
const Multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const passport= require('passport')

let storage = Multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, path.join(__dirname, '../public/profileImage' ));
    },
    filename : function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname) );
    }}
);

let upload = Multer({ storage: storage })


router.post("/signup", upload.single('image'), (req,res)=>{

    Users.findOne({email: req.body.email }).then((user)=>{
       if(user){
           return res.status(400).send(`An account with the email ${req.body.email} already exists`)
       }else{
            Users.findOne({username : req.body.username}).then((user)=>{
                if(user){
                    return res.status(400).send(`username { ${req.body.username} } already taken`)
                }else{
                    const file = req.file
                    let filename;
                    if(!file){
                        filename = "NULL"
                    }else{
                        filename = req.file.filename
                    }
                    
                    let userData = new Users({
                        name: req.body.name,
                        //password: md5(req.body.password),
                        password: Users.hashPassword(req.body.password),
                        //password: bcrypt.hashSync(req.body.password,10),
                        username: req.body.username,
                        img: filename,
                        email: req.body.email,
                        profileImg: req.body.url,
                    });
                    
                    userData.save((err, data) =>{
                        if(err){
                            return res.status(400).send(`Something went Wrong try later`)
                        }else{
                            console.log("saved")
                            res.status(201).json(data)
                        }
                    })
                }
            })
       }
    })
 
})

router.post("/login", (req,res,next)=>{
    console.log (req.body.email)
    console.log(req.body.password)

    passport.authenticate('local', function(err, user, info) {
        if (err) { return res.status(501).send(err); }
        if (!user) { return res.status(501).send(info); }
        req.logIn(user, function(err) {
          if (err) { return res.status(501).send(err); }
          return res.status(200).json(user);
        });
      })(req, res, next);

    /*Users.findOne({email: req.body.email}).then((user)=>{
        //console.log(user)
        if(user){
            console.log(md5(user.password))
            console.log(md5(user.password))
             /*if( md5(user.password) === req.body.password ){
                return res.status(201).send(`User Found`)
            }else{
                return res.status(400).send(`Password is wrong`)
            }
        }else{
            console.log("not found")
           return res.status(400).send(`Email ${req.body.email} not found register first`)

        }
    })*/
})

router.post("/newpassword/:username", (req,res)=>{
    res.send("post login")
})

module.exports = router