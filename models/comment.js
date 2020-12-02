const mongoose = require('mongoose')


let commentSchema = mongoose.Schema({
    comment : String,
    authorDetails :[{
        user_id:String,
        username:String
    }],
    date : {type: Date,default: Date.now},
    likeCount : Number,
    dislikeCount : Number,
    likeUnlikeDetails : [{
        user_id:string,
        username:string
    }]
})
let Comment = mongoose.model("comment", commentSchema)
module.exports = Comment