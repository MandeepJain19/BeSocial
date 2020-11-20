const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/BeSocial", { useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true });

let friendSchema = new mongoose.Schema({
    Friendname : String,
    isFollower : Boolean,
    isFollowing : Boolean,
    posts: [{
        postDesc : String,
        postUrl : Array,
    }]
})

let friend = mongoose.model("friend", friendSchema)
module.exports = friend