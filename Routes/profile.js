const express = require('express')
const router = express.Router()

router.get("/:name",(req,res)=>{
    res.send(req.params.name + "'s  profile")
})
router.put("/:name/edit",(req,res)=>{
    res.send("update profile")
})
router.post("/:name/delete",(req,res)=>{
    res.send("delete profile")
})

module.exports = router