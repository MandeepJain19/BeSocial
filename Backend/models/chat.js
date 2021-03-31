const mongoose = require('mongoose');
const User = require('./users')


let chatSchema = mongoose.Schema({
   sendername : {type : String, required : true},
   receivername : {type : String, required : true},
    message : {type : String, required : true},
    dateTime : {type: Date, default: Date.now},
    status : String,
    time : String
})
let chat =  mongoose.model("chat", chatSchema)
module.exports = chat