const express = require('express')
const router = express.Router()
const user = require('../models/users')


router.get("/SignUp", (req,res)=>{
    res.send("Signup")
})
router.post("/SignUp", (req,res)=>{
    res.send("signup post")
})

router.get("/login", (req,res)=>{
    res.send("Login page")
})
router.post("/login", (req,res)=>{
    res.send("post login")
})
router.get("/forgotPassword", (req,res)=>{
    res.send("Login page")
})
router.post("/newPassword", (req,res)=>{
    res.send("post login")
})

module.exports = router