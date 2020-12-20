const express = require('express')
const router = express.Router()

router.get("/followers",(req,res)=>{
    res.send( "  followers")
})
router.get("/following",(req,res)=>{
    res.send( "  following")
})
router.delete("/deletefriend/:username/:id",(req,res)=>{
    res.send("remove friend")
})
router.post("/addFriend", (req,res)=>{
    res.send("Friend request")
})
router.post("/confirmReq", (req,res)=>{
    res.send("confirm req")
})

module.exports = router