const express = require('express')
const router = express.Router()

router.get("/post/:name/:id", (req,res)=>{
    res.send("post id "+ req.params.id)
})
router.post("/post/:name/:id/comment", (req,res)=>{
    res.send("comment on post")
})
router.delete("/post/:name/:id/:commentid", (req,res)=>{
    res,send("delete comment")
})
router.post("/newpost/:name",(req,res)=>{
    res.send("New Post")
})
router.put("/edit/:name/:id",(req,res)=>{
    res.send("update post")
})
router.delete("/delete/:name/:id",(req,res)=>{
    res.send("delete post "+req.params.id)
})

module.exports = router