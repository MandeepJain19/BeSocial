const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/BeSocial", { useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true });

let commentSchema = mongoose.Schema({
    commentDesc : String,
    author : [{
        name: String,
    }],
    date : {type: Date,default: Date.now},
    likeCount : Number,
    dislikeCount : Number
})
let comment = mongoose.model("comment", commentSchema)
module.exports = comment