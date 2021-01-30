import React from 'react';
import './style.css';


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

class Chat extends React.Component {

    constructor() {
        super()
        this.state = {
            messages: DUMMY_DATA
        }
    }

    render() {
        return (
            <div className="chat">
                {/* <Title /> */}
                <MessageList messages={this.state.messages} />
                {/* <SendMessageForm /> */}
            </div>
        )
    }
}

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