const dateFormat = require('../utils/dateFormat');
const {
    Schema,
    model
} = require('mongoose');
const reactionSchema = require('./Reaction');

const StatusSchema = new Schema({
    messageText: {
        type: String,
        required: 'You need to leave a message',
        minlength: 1,
        maxlength: 280
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    reactions: [reactionSchema]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

StatusSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Status = model('Status', StatusSchema);

module.exports = Status;