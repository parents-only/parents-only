import React from 'react';
import './style.css';
import { TOGGLE_CHAT } from "../../utils/actions";
import MessageList from '../MessageList/index';
import MessageForm from '../MessageForm/index';
import { useDispatch, useStore } from "react-redux";

const Chat = () => {

    const store = useStore();
    const dispatch = useDispatch();
    const state = store.getState();

    function toggleChat() {
        dispatch({ type: TOGGLE_CHAT });
    }

    if (!state.chatOpen) {
        return (
            <div className="chat-closed" onClick={toggleChat}>
                {/* <i className="fas fa-comment-alt"></i> */}
                <span
                    className="messageIcon"
                    role="img"
                    aria-label="messages">💬</span>
            </div>
        )
    }

    return (
        <div className="chat">
            <div className="close" onClick={toggleChat}>[close]</div>
            <MessageList messages={state.messages} />
            <MessageForm />
        </div>
    )
};

export default Chat;