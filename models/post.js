const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/BeSocial", { useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true });

let postSchema = mongoose.Schema({
    postDesc : String,
    postUrl : Array,
    commentId : [{
        commentDesc : String,
        author : Array,
        date : {type: Date,default: Date.now},
        likeCount : Number,
        dislikeCount : Number
    }],
    likesDetails : [{
        
        name:String
    }],
    Likes : Number,
    date : {type: Date,default: Date.now},
}) 
let post = mongoose.model("post", postSchema)
module.exports = post