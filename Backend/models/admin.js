const mongoose = require('mongoose'); 
const Post = require('./post'); 

let schema = mongoose.Schema({
    name:String,
    password:String,
    reportedPost : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : Post
    }],
})