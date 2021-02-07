const {
    Schema,
    model
} = require('mongoose');

const MessageSchema = new Schema({
    messageText: {
        type: String,
        required: 'You need to leave a message',
        minlength: 1,
        maxlength: 280
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

MessageSchema.set('timestamps', true)

const Message = model('Message', MessageSchema);

module.exports = Message;