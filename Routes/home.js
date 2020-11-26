const express = require('express')
const router = express.Router()
const user = require('../models/users')

router.get("/", (req,res)=>{
    res.send("cover Page")
})
router.get("/home",(req,res)=>{
    res.send("home")
})

module.exports = router



