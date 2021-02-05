import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $age: Int!, $location: [Float!] ) {
    addUser(username: $username, email: $email, password: $password, age: $age, location: $location) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($username: String, $email: String, $age: Int, $bio: String ) {
    updateUser(username: $username, email: $email, age: $age, bio: $bio) {
        _id
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation addMessage($messageText: String!) {
    addMessage(messageText: $messageText) {
      _id
      messageText
      createdAt
      username
      chatRoom_id
      reactions {
        _id
      }
    }
  }
`;

export const ADD_REACTION = gql`
  mutation addReaction($messageId: ID!, $reactionBody: String!) {
    addReaction(messageId: $messageId, reactionBody: $reactionBody) {
      _id
      reactionCount
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($id: ID!) {
    removeFriend(friendId: $id) {
      _id
      username
      friends {
        _id
        username
      }
    }
  }
`;
