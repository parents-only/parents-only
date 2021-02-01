const dateFormat = require('../utils/dateFormat');
const { Schema, model } = require('mongoose');
var mongoose = require("mongoose");
const reactionSchema = require('./Reaction');

const MessageSchema = new mongoose.Schema({
    messageText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    chatRoom_id: {
        type: Schema.Types.ObjectId
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    sentBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    receivedBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    numberOfMessage: {
        type: Number
    },
    // username: {
    //     type: String,
    //     required: true,
    //     trim: true
    // }
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// MessageSchema.virtual('reactionCount').get(function () {
//     return this.reactions.length;
// });

const Message = model('Message', MessageSchema);

module.exports = Message;
