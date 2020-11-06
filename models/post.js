const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/BeSocial", { useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true });

let postSchema = mongoose.Schema({
    postid : {type : String, exists: true ,unique : true},
    postDesc : String,
    postUrl : Array,
    commentId : Array,
    likesDetails : Array,
    noOfLikes : Number,
    datePost : {type: Date,default: Date.now},
}) 
let post = mongoose.model("post", postSchema)
module.exports = post