const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/BeSocial", { useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true });

let userSchema = new mongoose.Schema({
    userId : {type : String, exists: true ,unique : true},
    password: {type : String, exists: true},
    userName: {type : String, exists: true, uunique : true},
    mobile : {type : String},
    gender : {type : String},
    profileImg : {type : String},
    emailId : {type : String},
    postList : Array,
    followersCount : Number,
    followingCount : Number,
    followersList : Array,
    followingList : Array,
    isAdmin : Boolean,
})

let user = mongoose.model("user", userSchema)
module.exports = user
