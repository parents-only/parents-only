import gql from 'graphql-tag';

export const QUERY_MESSAGES = gql`
  query messages($username: String) {
    messages(username: $username) {
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

export const QUERY_MESSAGE = gql`
  query message($id: ID!) {
    message(_id: $id) {
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

export const QUERY_USER = gql`
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
      messages {
        _id
        messageText
        createdAt
        reactionCount
      }
    }
  }
`;



export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      age
      bio
      avatar
      messages {
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

export const QUERY_ME_BASIC = gql`
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

export const QUERY_FRIEND_CARD = gql`
  {
      cards [
          _id
          username
      ]
  }
`;