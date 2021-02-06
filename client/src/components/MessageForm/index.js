import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_STATUS } from "../../utils/mutations";
import 'react-dropdown/style.css';
import { useStore } from "react-redux";
import { Button, Form } from "react-bootstrap";

const MessageForm = () => {
  const [messageText, setText] = useState();
  const state = useStore().getState();
  const [addStatus] = useMutation(ADD_STATUS);

  // update state based on form input changes
  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
    }
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      await addStatus({
        variables: { messageText }
      });

      // clear form value
      setText('');
    } catch (e) {
      console.error(e);
    }
  };

  const user = state.user;
  console.log(user);

  return (
    <div className="grid-1">
      <div className="grid-1">
      </div>
      <br></br>
      <br></br>
      <div className="grid-2">
        <div className="statusCard">
          <div className="row px-3">
            <div className="flex-column">
              <h3 className="mb-0 font-weight-normal">{user.username}'s Message</h3>
            </div>
          </div>
          <Form noValidate onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='How are you feeling today?'
                name='username'
                onChange={handleChange}
                value={messageText}
                required
              />
            </Form.Group>
            <Button
              disabled={!(messageText)}
              type='submit'
              variant='dark'>
              Submit
                        </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default MessageForm;