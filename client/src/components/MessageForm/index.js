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

<<<<<<< HEAD
    const option = [];
    user.friends.forEach(friend => {
      option.push(friend.username);
    });
    console.log(option);

=======
>>>>>>> develop
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
                            <h3 className="mb-0 font-weight-normal">{user.username}'s Messages</h3>
                        </div>
                    </div>
<<<<<<< HEAD
                    <Dropdown options={option} placeholder="Select a friend to message" />
                    <div className="row px-3 form-group" onSubmit={handleFormSubmit}>
                        <textarea
                            placeholder="Here's a new message..."
                            value={messageText}
                            className="text-muted bg-light mt-4 mb-3"
                            onChange={handleChange}
                        ></textarea>
                        <div className="row px-3">
                            <div className="btn btn-dark col-ml-auto " type="submit">Post</div>
                            <p id="status" className={` ${characterCount === 280 || error ? 'text-error' : ''}`}>
                                Character Count: {characterCount}/280
                  {error && <span className="ml-2">Something went wrong...</span>}
                            </p>
                        </div>
                    </div>
=======
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
                            variant='success'>
                            Submit
                        </Button>
                    </Form>
>>>>>>> develop
                </div>
            </div>
        </div>

    )
}

export default MessageForm;
