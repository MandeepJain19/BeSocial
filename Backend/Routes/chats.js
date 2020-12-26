const express = require('express')
const router = express.Router()

router.get("/message/:username",(req,res)=>{

})
router.post("/message/:username",(req,res)=>{
    res.send("send message")
})
router.post("/messages",(req,res)=>{
    res.send("message to all")
})

module.exports = router