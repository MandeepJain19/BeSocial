const mongoose = require('mongoose');
const User = require('./users');


let commentSchema = mongoose.Schema({
    comment : String,
    authorDetails :[{
        type: mongoose.Schema.Types.ObjectId,
        ref : User
    }],
    date : {type: Date,default: Date.now},
    likeCount : Number,
    dislikeCount : Number,
    likeDetails : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : User
    }]
})
let Comment = mongoose.model("comment", commentSchema)
module.exports = Comment