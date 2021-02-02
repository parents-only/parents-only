const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    friendCount: Int
    messages: [Message]
    friends: [User]
    avatar: String
    age: Int
    location: String
    bio: String 
  }

  type Message {
    _id: ID
    messageText: String
    createdAt: String
    username: String
    chatRoom_id: ID
    sentBy( _id: ID ): User
    receivedBy( _id: ID ): User
    numberOfMessage: Int
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
    userSearch(filter: String!) : User
    messages(username: String): [Message]
    message(_id: ID!): Message
   
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addMessage(messageText: String!): Message
    addReaction(messageId: ID!, reactionBody: String!): Message
    addFriend(friendId: ID!): User
    updateUser(
      username: String
      firstName: String
      lastName: String
      email: String
      password: String
      age: Int
      location: String
      bio: String
    ): User
    
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;