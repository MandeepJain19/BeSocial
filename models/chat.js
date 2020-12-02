const mongoose = require('mongoose')


let chatSchema = mongoose.Schema({
    sender_id : {type : String, exists: true},
    receiver_id : {type : String, exists: true},
    message : String,
    dateTime : {type: Date,default: Date.now},
    status : String,
    image:[]
})
let chat =  mongoose.model("chat", chatSchema)
module.exports = chat