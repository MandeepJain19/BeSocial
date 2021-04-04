const mongoose = require('mongoose'); 
const Post = require('./post'); 

let adminSchema = mongoose.Schema({
    name:{type: String, default:"Admin"},
    password:{type: String},
    reportedPost : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : Post
    }],
})

let Admin = mongoose.model("admin", adminSchema)
module.exports = Admin