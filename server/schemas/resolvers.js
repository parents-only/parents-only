const {
  User
} = require("../models");
const {
  AuthenticationError
} = require("apollo-server-express");
const {
  signToken
} = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({
            _id: context.user._id
          })
          .select('-__v -password')
          .populate('messages')
          .populate('friends');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('messages')
        .populate('friends');
    },
    user: async (parent, {
      username
    }) => {
      return User.findOne({
          username
        })
        .select('-__v -password')
        .populate('friends')
        .populate('messages');
    },

    // get a user by _id
    userById: async (parent, {
      _id
    }) => {
      return User.findOne({
        _id
      }).select("-__v -password");
    },
    messages: async (parent, {
      username
    }) => {
      const params = username ? {
        username
      } : {};
      return Message.find(params).sort({
        createdAt: -1
      });
    },
    message: async (parent, {
      _id
    }) => {
      return Message.findOne({
        _id
      });
    }

  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return {
        token,
        user
      };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, {
      email,
      password
    }) => {
      const user = await User.findOne({
        email
      });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return {
        token,
        user
      };
    },

    addMessage: async (parent, args, context) => {
      if (context.user) {
        const message = await Message.create({
          ...args,
          username: context.user.username
        });

        await User.findByIdAndUpdate({
          _id: context.user._id
        }, {
          $push: {
            messages: message._id
          }
        }, {
          new: true
        });

        return message;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReaction: async (parent, {
      messageId,
      reactionBody
    }, context) => {
      if (context.user) {
        const updatedMessage = await Message.findOneAndUpdate({
          _id: messageId
        }, {
          $push: {
            reactions: {
              reactionBody,
              username: context.user.username
            }
          }
        }, {
          new: true,
          runValidators: true
        });

        return updatedMessage;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addFriend: async (parent, {
      friendId
    }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate({
          _id: context.user._id
        }, {
          $addToSet: {
            friends: friendId
          }
        }, {
          new: true
        }).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

/*saveBook: async (parent, args, context) => {
        // console.log("savedBooks:", savedBooks)
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedBooks: args.input } },
            { new: true, runValidators: true }
          );
      
          return updatedUser;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      },
      removeBook: async (parent, args, context) => {
        if (context.user) {
          console.log(context.user);
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedBooks: { bookId: args.bookId } } },
            { new: true }
          );
        console.log(updatedUser);
          return updatedUser;
        }
  
        throw new AuthenticationError("You need to be logged in!");
      },*/



module.exports = resolvers;

// IMPORTANT
// The Apollo server library can also be set up to pass the data sources, such as the database model we're working with, as an argument to the resolver function. If you ever look at the tutorial Apollo has on its website, you'll see that they set it up in that way, so don't be alarmed if it looks different from how we've set it up here.