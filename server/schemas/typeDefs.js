const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    image: String
    friendCount: Int
    messages: [Message]
    friends: [User]
  }

  type Message {
    _id: ID
    messageText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }


  type Query {
    me: User
    users: [User]
    user(username: String!): User
    userById(_id: ID!): User
    messages(username: String): [Message]
    message(_id: ID!): Message
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addMessage(messageText: String!): Message
    addReaction(messageId: ID!, reactionBody: String!): Message
    addFriend(friendId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
