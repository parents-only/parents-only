const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');



const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    avatar: {
      type: String,
      defaultValue: "../../public/images/default.png",
    },
    age: {
        type: Number,
        required: true,
        min: [18, 'You must be 18 or older to use this website.'],
        max: 120
    },
    location: [{
      lat: {
        type: Number,
        required: true,
    },
    lon: {
        type: Number,
        required: true,
    },
    }],
    bio: { 
      type: String,
      maxlength: 250
    }
    
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
//userSchema.virtual('friendCount').get(function () {
 // return this.friendsList.length;
//});

const User = model('User', userSchema);

module.exports = User;
