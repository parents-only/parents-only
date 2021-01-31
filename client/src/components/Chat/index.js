import React from 'react';
import './style.css';
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CHAT } from "../../utils/actions";


const DUMMY_DATA = [
    {
        senderId: "perborgen",
        text: "what's up?"
    },
    {
        senderId: "makedo",
        text: "your mom"
    }
]

const Chat = () => {

    const [state, dispatch] = useStoreContext();

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
                    aria-label="messages">💬</span>
            </div>
        )
    }

    return (
        <div className="chat">
            <div className="close" onClick={toggleChat}>[close]</div>
            {/* <Title /> */}
            <MessageList messages={state.messages} />
            {/* <SendMessageForm /> */}
        </div>
    )
};

class MessageList extends React.Component {
    render() {
        return (
            <ul className="message-list">
                {this.props.messages.map(message => {
                    return (
                        <li key={message.id}>
                            <div>
                                {message.senderId}
                            </div>
                            <div className="messageBox">
                                {message.text}
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Chat;