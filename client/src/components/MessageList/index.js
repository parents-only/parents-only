import React from 'react';
import { useStore } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css';

const MessageList = () => {
    const state = useStore().getState();
    let statuses = state.user.statuses

  if (statuses.length === 0) {
    return <h3>No Status Updates Yet</h3>;
  }

  return (
    <div className="grid">
      <h3>{state.user.username}'s Posts</h3>
      {statuses &&
        statuses.map(message => (
          <div key={message._id} className="message-card mb-3" style={{height: 'fit-content' ,borderRadius:'.5rem', border: "solid", textAlign: "center", margin: "auto"}}>
            <p className="card-header">
              <Link
                to={`/profile/${message.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {message.username}
              </Link>{' '}
              Message on {message.createdAt}
            </p>
            <div className="card-body">
            <p className="message">{message.messageText}</p>
              <Link to={`/message/${message._id}`}>
                {/* <p className="mb-0">
                  Reactions: {message.reactionCount} 
                  <br></br>
                  <br></br> 
                  Click to{' '}
                  {message.reactionCount ? 'see' : 'start'} the discussion!
                </p> */}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MessageList;
