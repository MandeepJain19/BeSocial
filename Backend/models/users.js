const mongoose = require('mongoose');
const Post = require('./post');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

let userSchema = new mongoose.Schema({
    name:{type : String, exists: true},
    password: {type : String, exists: true},
    username: {type : String, exists: true, unique: true},
    img : {type : String},
    email : {type : String, exists: true, unique: true},
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

userSchema.statics.hashPassword = function hashPassword(password){
  return bcrypt.hashSync(password,10);
}

userSchema.methods.isValid = function(hashedpassword){
  return  bcrypt.compareSync(hashedpassword, this.password);
}

let User = mongoose.model("user", userSchema);
module.exports = User
