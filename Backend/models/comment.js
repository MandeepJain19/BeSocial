const mongoose = require('mongoose');
const User = require('./users');


let commentSchema = mongoose.Schema({
    comment : String,
    author :{type :String},
    authorimage : {type : String},
    date : {type: Date,default: Date.now},
    likeCount : {type : Number,default : 0 },
    // dislikeCount : Number,
    likeDetails : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : User
    }]
})
let Comment = mongoose.model("comment", commentSchema)
module.exports = Comment