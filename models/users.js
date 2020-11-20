const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/BeSocial", { useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true });

let userSchema = new mongoose.Schema({
    password: {type : String, exists: true},
    userName: {type : String, exists: true, uunique : true},
    mobile : {type : String},
    gender : {type : String},
    profileImg : {type : String},
    emailId : {type : String},
    postList : [{
       
        postDesc : String,
        postUrl : Array,
    }],
    followersCount : Number,
    followingCount : Number,
    followersList : [{
         Friendname : String,
    }],
    followingList :  [{
              
        Friendname : String,
    }],
  
})

let user = mongoose.model("user", userSchema)
module.exports = user
