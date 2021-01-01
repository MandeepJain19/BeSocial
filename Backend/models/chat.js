const mongoose = require('mongoose');
const User = require('./users')


let chatSchema = mongoose.Schema({
    sender_id : {type : mongoose.Schema.Types.ObjectId,
                    ref: User,
                    exists: true
                },
    receiver_id : {type : mongoose.Schema.Types.ObjectId,
                        ref: User,
                        exists: true
                  },
    message : String,
    dateTime : {type: Date,default: Date.now},
    status : String,
    image:[]
})
let chat =  mongoose.model("chat", chatSchema)
module.exports = chat