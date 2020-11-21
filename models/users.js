const mongoose = require('mongoose')


let userSchema = new mongoose.Schema({
    name:String,
    password: {type : String, exists: true},
    userName: {type : String, exists: true, unique : true},
    mobile : {type : String},
    gender : {type : String},
    profileImg : {type : String},
    emailId : {type : String},
    postList : [{
       
        postDesc : String,
        postUrl : [],
    }],
    followersCount : Number,
    followingCount : Number,
    followersList : [{
         name : String,
    }],
    followingList :  [{
              
        name : String,
    }],
  
})

let User = mongoose.model("user", userSchema)
module.exports = User
