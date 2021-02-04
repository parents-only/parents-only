import React, { useState, useQuery } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_MESSAGE } from '../../utils/mutations';
import { QUERY_MESSAGES, QUERY_ME } from '../../utils/queries';


const MessageForm = () => {
  const [messageText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const { data } = useQuery(QUERY_ME)
  
    // Now if there's a value in userParam that we got from the URL bar, we'll use that value to run the QUERY_USER query. If there's no value in userParam, like if we simply visit /profile as a logged-in user, we'll execute the QUERY_ME query instead.


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

  return (
    <div className="grid-1">
      <div className="grid-1">
      <p  id="status" className={` ${characterCount === 280 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      </div>
      <br></br>
      <br></br>
      <div className="grid-2">
           <div className="statusCard">
              <div className="row px-3"> <img className="profile-pic mr-3" src={data.user.avatar} alt="" />
                    <div className="flex-column">
                        <h3 className="mb-0 font-weight-normal">{data.user.username}</h3> 
                    </div>
              </div>
            <div className="row px-3 form-group" onSubmit={handleFormSubmit}>
                <textarea
                  placeholder="Here's a new message..."
                  value={messageText}
                  className="text-muted bg-light mt-4 mb-3"
                  onChange={handleChange}
                ></textarea>
                <div className="row px-3">
                  <p className="fa fa-user options mb-0 mr-4"></p>
                  <p className="fa fa-map-marker options mb-0 mr-4"></p>
                  <p className="fa fa-image options mb-0 mr-4"></p> <img className="options" src="https://img.icons8.com/material/24/000000/more--v2.png" width="30px" height="28px" alt="" />
                  <div className="btn btn-dark ml-auto" type="submit">Post</div>
                </div>
              </div>
          </div>
        </div>
      </div>
  
    )
}

export default MessageForm;
