const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const Posts = require('../models/post')
const Multer = require('multer');
const path = require('path');
const Post = require('../models/post');
const Comments = require('../models/comment')
const Admin = require('../models/admin');
//Multer config
let storage = Multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, path.join(__dirname,'../public/posts'));
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

//get specific post
router.get("/getpost/:id", (req,res)=>{
    Post.findOne({_id : req.params.id}).populate("comment").exec((err,post)=>{
        if(err){
            res.status(400).send({message : "Something went wrong"})
        }else{
            if(!post){
            res.status(400).send({message : "Post not found"})
            }else{
                
                res.status(200).json(post)
            }
        }
    })
});

router.post("/comment/:postid",isLoggedin,(req,res)=>{
    
    Post.findOne({_id : req.params.postid}, (err,post)=>{
        if(err){
            res.status(501).send("Post not found") 
        }else{
           let newcomment = new Comments({
                comment : req.body.comment,
                author : req.user.username,
                authorimage : req.user.img
    
            })

            Comments.create(newcomment, (err,comment)=>{
                if(err){
                    return res.status(400).send(`Something went Wrong try later`)
                }else{
                    post.comment.push(comment)
                    post.save((err, post)=>{
                        if(err){
                            return res.status(400).send(`Something went Wrong try later`)
                        }else{
                            return res.status(200).json(post)
                        }
                    })
                }
            })
        }
    })
})
router.delete("/comment/:postid/:commentid", (req,res)=>{
    res,send("delete comment")
})
router.post("/post/:username",isLoggedin,upload.single("image"),(req,res)=>{
    
    if(!req.file){
        res.status(501).send("can't Post without image")  
    }else{
        
        Users.findOne({username : req.params.username}).then((user)=>{
            if(user){
                let newpost = new Posts({
                    caption : req.body.caption,
                    postUrl : req.file.filename,
                    taglist : req.body.tagname,
                    author : req.user.username,
                    authorimage : req.user.img
                })

                Posts.create(newpost,(err, post)=>{
                    if(err){
                        return res.status(400).send(`Something went Wrong try later`)
                    }else{
                        user.post.push(post);
                        user.save((err, data)=>{
                            if(err){
                                return res.status(400).send(`Something went Wrong try later`)
                            }else{
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

router.put("/likepost",isLoggedin,(req, res)=>{
    Posts.findOne({_id: req.body.id}, (err, post)=>{
        if(err){
            res.status("401").json({message: "Something went wrong"})
        }else{
            if(!post){
                res.status("401").json({message: "Post not Available"})
            }else{
                if(req.user.username === post.author){
                   return res.status("400").send( "Cannot like your own post ")
                }else{
                    if(post.likedBy.includes(req.user.username)){

                        return res.status("400").json({message :"you already liked this posts"})
                    }else{
                        if(post.dislikedBy.includes(req.user.username)){
                            post.dislikes--;
                            const arrayIndex = post.dislikedBy.indexOf(req.user.username);
                            post.dislikedBy.splice(arrayIndex,1);
                            post.likes++;
                            post.likedBy.push(req.user.username);
                            post.save((err)=>{
                                if(err){
                                    res.status(401).json("Something went wrong")
                                }else{
                                    res.status(200).json("Post Liked!")
                                }
                            });

                        }else{
                            post.likes++;
                            post.likedBy.push(req.user.username);
                            post.save((err)=>{
                                if(err){
                                    res.status(401).json("Something went wrong")
                                }else{
                                    res.status(200).json("Post Liked!")
                                }
                            });
                        }
                    }
                }
            }
        }
    })
})

router.put("/dislikepost",isLoggedin,(req, res)=>{

    Posts.findOne({_id: req.body.id}, (err, post)=>{
        if(err){
            res.status("401").json({message: "Something went wrong"})
        }else{
            if(!post){
                res.status("401").json({message: "Post not Available"})
            }else{
                if(req.user.username === post.author){
                    res.status(500).json({message: "Cannot dislike your own post "})
                }else{
                    if(post.dislikedBy.includes(req.user.username)){
                        res.status(500).json({message: "you already liked this posts"})
                    }else{
                        if(post.likedBy.includes(req.user.username)){
                            post.likes--;
                            const arrayIndex = post.likedBy.indexOf(req.user.username);
                            post.likedBy.splice(arrayIndex,1);
                            post.dislikes++;
                            post.dislikedBy.push(req.user.username);
                            post.save((err)=>{
                                if(err){
                                    res.status(401).json("Something went wrong")
                                }else{
                                    res.status(200).json("Post disLiked!")
                                }
                            });

                        }else{
                            post.dislikes++;
                            post.dislikedBy.push(req.user.username);
                            post.save((err)=>{
                                if(err){
                                    res.status(401).json("Something went wrong")
                                }else{
                                    res.status(200).json("Post disLiked!")
                                }
                            });
                        }
                    }
                }
            }
        }
    })
})

router.put("/post/report",(req,res)=>{
    Post.findOne({_id : req.body.id},(err,post)=>{
        if(err){
            res.status(500).send("Something Went Wrong")
        }else{
            if(!post){
            }else{
                Admin.findOne({name : "Admin"}, (err,admin)=>{
                    if(err){
                        res.status(500).send("Something Went Wrong")
                    }else{
                        admin.reportedPost.push(post._id)

                        admin.save((err,admin)=>{
                            if(err){
                                res.status(500).send("Something Went Wrong")
                            }else{
                                res.status(200).send(admin)
                            }
                        })
                    }
                })
            }
           
               
        }
    })
})

router.delete("/post/delete/:id",(req,res)=>{
   Post.findOneAndDelete({_id : req.params.id}, (err)=>{
       if(err){
           res.status(500).send("Something went wrong")
       }else{
           res.status(200).send("Post deleted")
       }
   })
})

function isLoggedin(req,res,next){
    if(req.isAuthenticated()) next();
    else return res.status(401).json({message:'Unauthorized Request'});
  }
module.exports = router