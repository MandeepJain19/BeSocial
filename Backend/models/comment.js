const mongoose = require('mongoose')
const user = require('./users')

let commentSchema = mongoose.Schema({
    comment : String,
    authorDetails :[{
        type: mongoose.Schema.Types.ObjectId,
        ref : user
    }],
    date : {type: Date,default: Date.now},
    likeCount : Number,
    dislikeCount : Number,
    likeDetails : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : user
    }]
})
let Comment = mongoose.model("comment", commentSchema)
module.exports = Comment