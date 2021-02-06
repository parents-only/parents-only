import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_MESSAGE } from "../../utils/mutations";
import { QUERY_MESSAGES, QUERY_ME } from "../../utils/queries";
import 'react-dropdown/style.css';
import { useStore } from "react-redux";

const MessageForm = () => {
    const [messageText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const state = useStore().getState();


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

    const user = state.user;

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
                </div>
            </div>
        </div>

    )
}

export default MessageForm;
