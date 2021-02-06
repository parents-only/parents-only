import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { ADD_MESSAGE } from "../../utils/mutations";
import { QUERY_MESSAGES, QUERY_ME } from "../../utils/queries";
import MessageList from '../MessageList';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';




const MessageForm = ({ username, friends }) => {
  const [messageText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  // const state = useStore().getState();

  //   // set initial form state
  //   const [userFormData, setUserFormData] = useState(state.user);
  //   const [editUser, { error }] = useMutation(UPDATE_USER);
  
    // Now if there's a value in userParam that we got from the URL bar, we'll use that value to run the QUERY_USER query. If there's no value in userParam, like if we simply visit /profile as a logged-in user, we'll execute the QUERY_ME query instead.

    // {friends.map(friend => (
    //   <button className="btn w-100 display-block mb-2" key={friend._id}>
    //     <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
    //   </button>
    // ))}

    
    // const defaultOption = options[0];

    // things to consider for the message
    // _id: ID
    // messageText: String
    // createdAt: String
    // username: String
    // chatRoom_id: ID
    // sentBy( _id: ID ): User
    // receivedBy( _id: ID ): User
    // numberOfMessage: Int
    
  const [addMessage, { error }] = useMutation(ADD_MESSAGE, {
    update(cache, { data: { addMessage } }) {
      try {
        // update message array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { messages } = cache.readQuery({ query: QUERY_MESSAGES });
        cache.writeQuery({
          query: QUERY_MESSAGES,
          data: { messages: [addMessage, ...messages] }
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, messages: [...me.messages, addMessage] } }
      });
    }
  });

  // update state based on form input changes
  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addMessage({
        variables: { messageText }
      });

      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

const user = useQuery(QUERY_ME)



const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];



  return (
    <div className="grid-1">
      <div className="grid-1">
      
      </div>
      <br></br>
      <br></br>
      <div className="grid-2">
           <div className="statusCard">
              <div className="row px-3"> <img className="profile-pic mr-3" src={user.avatar} alt=""/>
                    <div className="flex-column">
                        <h3 className="mb-0 font-weight-normal">{user.username}</h3> 
                    </div>
              </div>
              <Dropdown options={options} placeholder="Select a friend to message:" />
            <div className="row px-3 form-group" onSubmit={handleFormSubmit}>
                <textarea
                  placeholder="Here's a new message..."
                  value={messageText}
                  className="text-muted bg-light mt-4 mb-3"
                  onChange={handleChange}
                ></textarea>
                <div className="row px-3">
                  <div className="btn btn-dark col-ml-auto " type="submit">Send</div>
                  <p  id="status" className={` ${characterCount === 280 || error ? 'text-error' : ''}`}>
                  Character Count: {characterCount}/280
                  {error && <span className="ml-2">Something went wrong...</span>}
                </p>
                </div>
              </div>
          </div>
        </div>
        <MessageList />
      </div>
  
    )
}

export default MessageForm;
