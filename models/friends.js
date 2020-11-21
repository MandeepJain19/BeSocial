const mongoose = require('mongoose')


let friendSchema = new mongoose.Schema({
    name : String,
    isFollower : Boolean,
    isFollowing : Boolean,
    posts: [{
        post_id:String,
        postDesc : String,
        postUrl : [],
    }]
})

let Friend = mongoose.model("friend", friendSchema)
module.exports =Friend