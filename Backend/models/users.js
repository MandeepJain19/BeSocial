const mongoose = require('mongoose');
const Post = require('./post');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
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
    followRequestSent:{type :Array}, // followreq sent to 
    
    followers : {type:Number, default:0},
    following : {type:Number, default:0},
    followBackUser:[//user to followback
      { 
         type: mongoose.Schema.Types.ObjectId,
        ref : userSchema
      }
    ],
    followRequest:[//incoming follow req
      { 
      type: mongoose.Schema.Types.ObjectId,
        ref : userSchema
      }
    ],
    followersList : [
      { 
        type: mongoose.Schema.Types.ObjectId,
        ref : userSchema
      }
    ],
    followingList :  [
      { 
      type: mongoose.Schema.Types.ObjectId,
        ref : userSchema
      }
    ],
    bio: {type: String, default: "Configure your own bio..."},
    profession: {type: String, default: " "},
})

userSchema.statics.hashPassword = function hashPassword(password){
  return bcrypt.hashSync(password,10);
}

userSchema.methods.isValid = function(hashedpassword){
  return  bcrypt.compareSync(hashedpassword, this.password);
}

let User = mongoose.model("user", userSchema);
module.exports = User
