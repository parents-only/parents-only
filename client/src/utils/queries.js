import gql from 'graphql-tag';

export const QUERY_STATUSES = gql `
  query statuses($username: String) {
    statuses(username: $username) {
      _id
      messageText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_STATUS = gql `
  query status($id: ID!) {
    status(_id: $id) {
      _id
      messageText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_USER = gql `
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      age
      bio
      avatar
      friendCount
      friends {
        _id
        username
      }
      statuses {
        _id
        messageText
        createdAt
        reactionCount
      }
    }
  }
`;

export const QUERY_USERS = gql `
  query users($username: String!) {
    user(username: $username) {
      _id
      username
      email
      age
      bio
      avatar
      friendCount
      friends {
        _id
        username
      }
      statuses {
        _id
        messageText
        createdAt
        reactionCount
      }
    }
  }
`;


export const QUERY_ME = gql `
  {
    me {
      _id
      username
      email
      friendCount
      age
      bio
      avatar {
          filename
      }
      gallery
      statuses {
        _id
        messageText
        createdAt
        reactionCount
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql `
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_FRIEND_CARD = gql `
  {
      me {
          _id
          username
          email
          friends {
              _id
              username
          }
      }
      cards {
          _id
          username
          avatar
      }
  }
`;