const mongoose = require('mongoose');
const Post = require('./post');

let userSchema = new mongoose.Schema({
    name:String,
    password: {type : String, exists: true},
    username: {type : String, exists: true},
    profileImg : {type : String},
    email : {type : String, exists: true},
    DOB:{type : String} ,
    isprivate: {type : Boolean, default : true},
    post: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref : Post
      }
    ] ,
    
    followersCount : Number,
    followingCount : Number,
    friendRequest:[{
      user_id:String,
      username:String
}],
    followersList : [{
         user_id:String,
         username : String,
    }],
    followingList :  [{
            user_id:String,
            username : String,
    }]
  
})

let User = mongoose.model("user", userSchema);
module.exports = User
