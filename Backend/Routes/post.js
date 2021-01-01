const express = require('express')
const router = express.Router()

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