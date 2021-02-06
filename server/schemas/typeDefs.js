const {
    gql
} = require("apollo-server-express");

const typeDefs = gql `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    image: String
    friendCount: Int
    statuses: [Status]
    friends: [User]
    location: [Float]
    age: Int
    bio: String
    gallery: [String]
    avatar: File
    hobbies: [Hobby]
  }

  type Hobby {
      _id: ID
      name: String
  }

  type Status {
    _id: ID
    messageText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Message {
      _id: ID
      messageText: String
      sender: ID
      recipient: ID
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type File {
    filename: String
    mimetype: String
    encoding: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    userById(_id: ID!): User
    statuses(username: String!): [Status]
    status(_id: ID!): Status
    messagesBySender(sender: ID!): [Message]
    messagesByRecipient(recipient: ID!): [Message]
    message(_id: ID!): Message
    cards: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, age: Int!, location: [Float!]): Auth
    addStatus(messageText: String!): Status
    addMessage(messageText: String!, recipient: ID!): Message
    addReaction(messageId: ID!, reactionBody: String!): Status
    addFriend(friendId: ID!): User
    updateUser(
      _id: ID
      username: String
      email: String
      age: Int
      location: String
      bio: String
    ): User
    updateUserWithAvatar(
      _id: ID
      username: String
      email: String
      age: Int
      location: String
      bio: String
      avatar: Upload
    ): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;