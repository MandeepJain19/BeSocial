const express = require('express')
const router = express.Router()

router.get("/followers/:name",(req,res)=>{
    res.send(req.params.name + "'s  followers")
})
router.get("/following/:name",(req,res)=>{
    res.send(req.params.name + "'s  following")
})
router.delete("/deletefriend/:name/:id",(req,res)=>{
    res.send("remove friend")
})
router.post("/addFriend", (req,res)=>{
    res.send("Friend request")
})
router.post("/confirmReq", (req,res)=>{
    res.send("confirm req")
})

module.exports = router