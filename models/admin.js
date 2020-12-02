const mongoose = require('mongoose')
let schema = mongoose.Schema({
    name:String,
    password:String,
    reportedPost : [{
        post_id:String,
        username:String
    }],
})