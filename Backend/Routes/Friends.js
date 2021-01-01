const express = require('express')
const router = express.Router()

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
router.post("/confirmreq", (req,res)=>{
    res.send("confirm req")
})

module.exports = router