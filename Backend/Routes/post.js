const express = require('express')
const router = express.Router()

router.get("post/:username", (req,res)=>{
//all post
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
router.post("/post/:username",(req,res)=>{
    res.send("New Post")
})
router.put("/post/:postid",(req,res)=>{
    res.send("update post")
})
router.delete("/post/:postid",(req,res)=>{
    res.send("delete post ")
})

module.exports = router