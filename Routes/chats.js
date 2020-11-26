const express = require('express')
const router = express.Router()

router.get("/inbox", (req,res)=>{
    res.send("inbox")
})
router.get("/inbox/:id", (req,res)=>{
    res.send("inbox")
})

module.exports = router