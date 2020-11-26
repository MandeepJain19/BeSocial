const express = require('express')
const router = express.Router()

router.get("/:name/:id", (req,res)=>{
    res.send("post id "+ req.params.id)
})
router.post("/:name/:id/comment", (req,res)=>{
    res.send("comment on post")
})
router.delete("/:name/:id/:commentid", (req,res)=>{
    res,send("delete comment")
})
router.post("/:name/post",(req,res)=>{
    res.send("New Post")
})
router.put("/:name/:id/edit",(req,res)=>{
    res.send("update post")
})
router.delete(":name/:id/delete",(req,res)=>{
    res.send("delete post "+req.params.id)
})

module.exports = router