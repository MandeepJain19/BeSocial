const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/BeSocial", { useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true });

let commentSchema = mongoose.Schema({
    commentId : {type : String, exists: true ,unique : true},
    commentDesc : String,
    author : Array,
    datePost : {type: Date,default: Date.now},
    likeCount : Number,
    dislikeCount : Number
})
let comment = mongoose.model("comment", commentSchema)
module.exports = comment