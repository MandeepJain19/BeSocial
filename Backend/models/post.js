const mongoose = require('mongoose');
const comment = require('./comment');
const user = require('./users');

let postSchema = mongoose.Schema({
    caption : String,
    postUrl : [],
    comment : [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: comment
        }
    ] ,
    likesDetails : [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: user
        }
   ],
   dislikeDetails : [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: user
    }
],
    Likes : Number,
    dislike : Number,
    date : {type: Date,default: Date.now},
    taglist:[{
        type: mongoose.Schema.Types.ObjectId,
         ref: user
          }
        ]
}) 

let Post = mongoose.model("post", postSchema)
module.exports = Post