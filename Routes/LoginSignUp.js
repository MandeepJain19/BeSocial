const express = require('express')
const router = express.Router()
const user = require('../models/users')



router.post("/signup", (req,res)=>{
    res.send("signup post")
})

router.post("/login", (req,res)=>{
    res.send("post login")
})

router.post("/newPassword/:username", (req,res)=>{
    res.send("post login")
})

module.exports = router