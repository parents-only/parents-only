const {
    User,
    Status,
    Message
} = require("../models");
const {
    AuthenticationError
} = require("apollo-server-express");
const {
    signToken
} = require("../utils/auth");
const haversine = require('haversine');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({
                        _id: context.user._id
                    })
                    .select('-__v -password')
                    .populate('friends')
                    .populate('statuses');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('statuses')
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
                .populate('statuses');
        },

        // get a user by _id
        userById: async (parent, {
            _id
        }) => {
            return User.findOne({
                _id
            }).select("-__v -password");
        },
        statuses: async (parent, {
            username
        }) => {
            return Message.find(username).sort({
                createdAt: -1
            });
        },
        status: async (parent, {
            _id
        }) => {
            return Message.findOne({
                _id
            });
        },
        messagesBySender: async (parent, {
            sender
        }) => {
            return Message.find({sender}).sort({
                createdAt: -1
            });
        },
        messagesByRecipient: async (parent, {
            recipient
        }) => {
            return Message.find({recipient}).sort({
                createdAt: -1
            });
        },
        message: async (parent, {
            _id
        }) => {
            return Message.findOne({
                _id
            });
        },
        cards: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({
                        _id: context.user._id
                    })
                    .select('-__v -password')
                    .populate('messages')
                    .populate('friends');

                let viable = []
                let users = await User.find({})
                    .select('-__v -password')
                users.forEach(element => {

                    if (haversine({
                            latitude: userData.location[0],
                            longitude: userData.location[1]
                        }, {
                            latitude: element.location[0],
                            longitude: element.location[1]
                        }, {
                            threshold: 200,
                            unit: 'mile'
                        }) && userData._id != element._id) {
                        viable.push(element)
                    }
                });
                return viable
            }
            throw new AuthenticationError('Not logged in');
        }

    },
    Mutation: {
        addUser: async (_, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return {
                token,
                user
            };
        },
        updateUser: async (_, args, context) => {
            if (context.user) {
                const user = User.findById(context.user._id)
                const temp = {
                    username: args.username || user.username,
                    age: args.age || user.age,
                    email: args.email || user.email,
                    avatar: args.avatar || user.avatar,
                    bio: args.bio || user.bio,
                }
                return await User.findByIdAndUpdate(context.user._id, { $set: temp } , {
                    new: true,
                });
            }

            throw new AuthenticationError("Not logged in");
        },
        login: async (_, {
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
        addStatus: async (parent, args, context) => {
            if (context.user) {
                const status = await Status.create({
                    ...args,
                    username: context.user.username
                });

                await User.findByIdAndUpdate({
                    _id: context.user._id
                }, {
                    $push: {
                        statuses: status._id
                    }
                }, {
                    new: true
                });

                return status;
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
        },
        addMessage: async (_, args, context) => {
            if (context.user) {
                const message = Message.create({
                    ...args,
                    sender: context.user._id
                })

                return message;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
    }
};




module.exports = resolvers;

// IMPORTANT
// The Apollo server library can also be set up to pass the data sources, such as the database model we're working with, as an argument to the resolver function. If you ever look at the tutorial Apollo has on its website, you'll see that they set it up in that way, so don't be alarmed if it looks different from how we've set it up here.