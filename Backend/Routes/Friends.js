const e = require('express')
const express = require('express')
const router = express.Router()
const User = require('../models/users')

router.get("/followers",(req,res)=>{
    res.send({
        name:"mandeep",
        url:"cdcdccc",
        caption:"best post ever "
    })
})
router.get("/following",(req,res)=>{
    res.send( "  following")
})
router.delete("/unfollow/:username",(req,res)=>{
    res.send("remove friend")
})
router.post("/postfriend/:username", (req,res)=>{
    res.send("Friend request")
})
router.put("/confirmreq",isLoggedin, (req,res)=>{
    
    User.findOne({_id : req.body.id},(err,followuser)=>{

        if(err){
            return res.status(400).json({message : "Something went wrong"})
        }else{
            if(!followuser){
                return res.status(400).json({message : "Something went wrong"})
            }else{
                
                User.findOne({ _id : req.user._id },(err,user)=>{
                    if(err){
                        return res.status(401).json("Something went wrong")
                    }else{
                        user.followersList.push(followuser._id);
                        user.followers++;
                        user.followRequest.pull(followuser._id);
                        user.followBackUser.push(followuser._id)//user we have to follow
                        user.save((err)=>{
                            if(err){
                                return res.status(401).json("Something went wrong")
                            }else{
                                followuser.followingList.push(user._id);
                                followuser.following++;
                                followuser.followRequestSent.pull(user.username);
                                followuser.save((err)=>{
                                    if(err){
                                        return res.status(401).json("Something went wrong")
                                    }else{
                                        return res.status(200).json("successfully accepted")
                                    }
                                    
                                })
                            }
                        })

    
                    }
                });

            }
        }
    });
});

router.put("/follow",isLoggedin,(req,res)=>{

 User.findOne({_id : req.body.id},(err,followuser)=>{
    if(err){
        return res.status(400).json({message : "Something went wrong"})
    }else{
        if(!followuser){
            return res.status(400).json({message : "Something went wrong"})
        }else{
            
            User.findOne({_id : req.user._id},(err,user)=>{
                if(err){
                    return res.status(401).json("Something went wrong")
                }else{
                    user.followRequestSent.push(followuser.username)
                    followuser.followRequest.push(req.user._id)
                    user.save((err)=>{
                        if(err){
                            return res.status(401).json("Something went wrong")
                        }else{
                           
                            followuser.save((err)=>{
                                if(err){
                                    return res.status(401).json("Something went wrong")
                                }else{
                                   
                                    res.status(200).json("Follow request sent")
                                }
                            })
                        }
                    })
                    
                }
            })
           
        }
    }
 })

})

router.put("/followBackUser",isLoggedin,(req,res)=>{
   
    User.findOne({_id : req.body.id},(err,followbackuser)=>{

        if(err){
            return res.status(400).json({message : "Something went wrong"})
        }else{
            if(!followbackuser){
                return res.status(400).json({message : "user not found"})
            }else{
                
                User.findOne({ _id : req.user._id },(err,user)=>{
                    if(err){
                        return res.status(401).json("Something went wrong")
                    }else{
                        user.followingList.push(followbackuser._id);
                        user.following++;
                        user.followBackUser.pull(followbackuser._id)
                        user.save((err)=>{
                            if(err){
                                return res.status(401).json("Something went wrong")
                            }else{
                                followbackuser.followersList.push(user._id);
                                followbackuser.followers++;
                                followbackuser.save((err)=>{
                                    if(err){
                                        return res.status(401).json("Something went wrong")
                                    }else{
                                        return res.status(200).json("successfully accepted")
                                    }
                                    
                                })
                            }
                        })

    
                    }
                });

            }
        }
    });
})

function isLoggedin(req,res,next){
    if(req.isAuthenticated()) next();
    else return res.status(401).json({message:'Unauthorized Request'});
  }

module.exports = router