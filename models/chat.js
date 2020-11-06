const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/BeSocial", { useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true });

let chatSchema = mongoose.Schema({
    chatId : {type : String, exists: true },
    senderID : {type : String, exists: true},
    receiverID : {type : String, exists: true},
    chatDesc : String,
    dateTime : {type: Date,default: Date.now},
    status : String,
})
let chat =  mongoose.model("chat", chatSchema)
module.exports = chat