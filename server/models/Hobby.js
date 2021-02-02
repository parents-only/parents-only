const { Schema, model } = require('mongoose');

const HobbySchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    }
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const Hobby = model('Hobby', HobbySchema);

module.exports = Hobby;
