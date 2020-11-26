const express = require('express')
const router = express.Router()

router.get("/:name/followers",(req,res)=>{
    res.send(req.params.name + "'s  followers")
})
router.get("/:name/following",(req,res)=>{
    res.send(req.params.name + "'s  following")
})
router.delete("/:name/:id/deletefriend",(req,res)=>{
    res.send("remove friend")
})
router.post("/addFriend", (req,res)=>{
    res.send("Friend request")
})
router.post("/confirmReq", (req,res)=>{
    res.send("confirm req")
})

module.exports = router