const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const Posts = require('../models/post')
const Multer = require('multer');
const path = require('path');
const Post = require('../models/post');
//Multer config
let storage = Multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, path.join(__dirname,'../../Front-end/src/assets/img/Uploads/UserPosts/'));
    },
    filename : function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname) );
    }}
);

let upload = Multer({ storage: storage })


router.get("post/:username", (req,res)=>{
    req.send("post "+ req.params.username)
//all post
})
router.get("posts/check", (req,res)=>{
    req.send({
        "name":"mandeep",
        "url":"cdcdccc",
        "caption":"best post ever "
    })
//check check
})
router.get("tagpost/:username"), (req,res)=>{
//tag post
}
router.get("/post/:postid", (req,res)=>{
    res.send("post id ")
})
router.post("/comment/:postid", (req,res)=>{
    res.send("comment on post")
})
router.delete("/comment/:postid/:commentid", (req,res)=>{
    res,send("delete comment")
})
router.post("/post/:username",upload.single("image"),(req,res)=>{
    if(!req.file){
        res.status(501).send("can't Post without image")  
    }else{
        
        //console.log(req.params.username)
        Users.findOne({username : req.params.username}).then((user)=>{
            if(user){
                let newpost = new Posts({
                    caption : req.body.caption,
                    postUrl : req.file.filename,
                    taglist : req.body.tagname,
                    author : req.body.username
                })

                newpost.save((err, post)=>{
                    if(err){
                        return res.status(400).send(`Something went Wrong try later`)
                    }else{
                        user.post.push(post);
                        user.save((err, data)=>{
                            if(err){
                                return res.status(400).send(`Something went Wrong try later`)
                            }else{
                                console.log(data)
                                return res.status(200).json(data)
                            }
                        })
                    }
                })
            }else{
                res.status("401").send("user must logged in")
            }
        })

    }
})
router.put("/post/:postid",(req,res)=>{
    res.send("update post")
})
router.delete("/post/:postid",(req,res)=>{
    res.send("delete post ")
})

module.exports = router