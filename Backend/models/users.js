const mongoose = require('mongoose')


let userSchema = new mongoose.Schema({
    name:String,
    password: {type : String, exists: true},
    userName: {type : String, exists: true, unique : true},
    mobile : {type : String},
    profileImg : {type : String},
    emailId : {type : String},
    DOB:Date,
    friendRequest:[{
      user_id:String,
      username:String
    }],
    postList : [{
       
        postDesc : String,
        postUrl : [],
    }],
    followersCount : Number,
    followingCount : Number,
    followersList : [{
         user_id:String,
         username : String,
    }],
    followingList :  [{
            user_id:String,
            username : String,
    }],
  isprivate:Boolean
})

let User = mongoose.model("user", userSchema)
module.exports = User
