const mongoose = require('mongoose')


let postSchema = mongoose.Schema({
    caption : String,
    postUrl : [],
    commentId : [{
        Friend_id:String,
        commentDesc : String,
        name : String, 
    }],
    likesDetails : [{
         Friend_id:String,
         name:String
    }],
    Likes : Number,
    date : {type: Date,default: Date.now},
}) 
let Post = mongoose.model("post", postSchema)
module.exports = Post