const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/BeSocial", { useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true });

let friendSchema = new mongoose.Schema({
    friendId : {type:String, unique: true, exists : true},
    friendName : String,
    isFollower : Boolean,
    isFollowing : Boolean,
    postid : Array
})

let friend = mongoose.model("friend", friendSchema)
module.exports = friend