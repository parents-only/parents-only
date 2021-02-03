const dateFormat = require('../utils/dateFormat');
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const MessageSchema = new Schema({
    messageText: {
        type: String,
        required: 'You need to leave a message',
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    reactions: [reactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

MessageSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Message = model('Message', MessageSchema);

module.exports = Message;
