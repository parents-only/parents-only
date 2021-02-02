const {
    Schema,
    model
} = require('mongoose');
const bcrypt = require('bcrypt');



const locationSchema = new Schema(
    {
        lat: {
            type: Number,
            required: true,
        },
        long: {
            type: Number,
            required: true,
        },

    },
    // set this to use virtual below
    {
        toJSON: {
            virtuals: true,
        },
    }
);