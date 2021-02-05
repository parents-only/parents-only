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
    // constructor() {
    //     super()
    //     this.state = {
    //         messages: DUMMY_DATA
    //     }
    // }

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
                    aria-label="messages">Messages</span>
            </div>
        )
    }

    return (
        <div className="chat">
            <div className="close" onClick={toggleChat}>X</div>
            {/* <Title /> */}
            <MessageList messages={state.messages} />
            <MessageForm />
            {/* <SendMessageForm /> */}
        </div>
    )
};

// class MessageList extends React.Component {
//     render() {
//         return (
//             <ul className="message-list">
//                 {this.props.messages.map(message => {
//                     return (
//                         <li key={message.id}>
//                             <div>
//                                 {message.senderId}
//                             </div>
//                             <div className="messageBox">
//                                 {message.text}
//                             </div>
//                         </li>
//                     )
//                 })}
//             </ul>
//         )
//     }
// }

export default Chat;