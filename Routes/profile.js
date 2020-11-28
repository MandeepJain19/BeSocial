const express = require('express')
const router = express.Router()

router.get("/profile/:name",(req,res)=>{
    res.send(req.params.name + "'s  profile")
})
router.put("/edit/:name",(req,res)=>{
    res.send("update profile")
})
router.post("/delete/:name",(req,res)=>{
    res.send("delete profile")
})

module.exports = router