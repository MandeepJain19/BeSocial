const mongoose = require('mongoose');
const Comment = require('./comment');
const User = require('./users');

let postSchema = mongoose.Schema({
    author : String,
    caption : String,
    postUrl : [],
    comment : [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: Comment
        }
    ] ,
    likesDetails : [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
        }
   ],
   dislikeDetails : [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: User
    }
],
    Likes : {type: Number, default: 0},
    dislike : {type: Number, default: 0},
    date : {type: Date,default: Date.now},
    taglist:[{
        type: mongoose.Schema.Types.ObjectId,
         ref: User
          }
        ]
}) 

let Post = mongoose.model("post", postSchema)
module.exports = Post