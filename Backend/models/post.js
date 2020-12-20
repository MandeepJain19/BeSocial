const mongoose = require('mongoose')


let postSchema = mongoose.Schema({
    caption : String,
    postUrl : [],
    commentId : [{
        Friend_id:String,
        commentDesc : String, 
    }],
    likesDetails : [{
         Friend_id:String,
         name:String
    }],
    Likes : Number,
    dislike : Number,
    date : {type: Date,default: Date.now},
    taglist:[{
        username:String,
    }
    ]
}) 
let Post = mongoose.model("post", postSchema)
module.exports = Post