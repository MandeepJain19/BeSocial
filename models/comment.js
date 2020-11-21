const mongoose = require('mongoose')


let commentSchema = mongoose.Schema({
    comment : String,
    authorDetails :[{
        Friends_id:String,
        name:String 
    }],
    date : {type: Date,default: Date.now},
    likeCount : Number,
    dislikeCount : Number
})
let Comment = mongoose.model("comment", commentSchema)
module.exports = Comment