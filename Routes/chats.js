const express = require('express')
const router = express.Router()


router.post("/message/:username",(req,res)=>{
    res.send("send message")
})
router.post("/messageall",(req,res)=>{
    res.send("message to all")
})

module.exports = router