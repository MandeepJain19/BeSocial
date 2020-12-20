const express = require('express')
const router = express.Router()

router.get("/post/:username/:postid", (req,res)=>{
    res.send("post id ")
})
router.post("/comment/:postid", (req,res)=>{
    res.send("comment on post")
})
router.delete("/deletecomment/:postid/:commentid", (req,res)=>{
    res,send("delete comment")
})
router.post("/newpost/:username",(req,res)=>{
    res.send("New Post")
})
router.put("/edit/:postid",(req,res)=>{
    res.send("update post")
})
router.delete("/delete/:postid",(req,res)=>{
    res.send("delete post ")
})

module.exports = router