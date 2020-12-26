const express = require('express')
const router = express.Router()

router.get("/profile/:username",(req,res)=>{
    res.send(req.params.name + "'s  profile")
})
router.put("/edit/:username",(req,res)=>{
    res.send("update profile")
})
router.post("/profile/:username",(req,res)=>{
    res.send("delete profile")
})

module.exports = router