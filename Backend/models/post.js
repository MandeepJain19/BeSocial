const mongoose = require('mongoose');
const Comment = require('./comment');
const User = require('./users');

let postSchema = mongoose.Schema({
    author : String,
    authorimage : String,
    caption : String,
    postUrl : String,
    comment : [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: Comment
        }
    ] ,
   likedBy:{type :Array},
   dislikedBy:{type :Array},
    likes : {type: Number, default: 0},
    dislikes : {type: Number, default: 0},
    date : {type: Date,default: Date.now},
    
    taglist:[{
        type: mongoose.Schema.Types.ObjectId,
         ref: User
          }
        ]
}) 

let Post = mongoose.model("post", postSchema)
module.exports = Post