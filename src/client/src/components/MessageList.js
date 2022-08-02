// It accepts a list of messages and renders them.

import React from 'react';
import ChatMessage from './ChatMessage';
import { Text, Heading } from 'evergreen-ui';

export default function MessageList(props) {
    const messages = props.messages;
    return (
        <div className="margin-top margin-bottom">
            <Heading size={800}>Messages:</Heading>
            <span>
                {messages.length ?
                    messages.map(message =>
                        <ChatMessage key={message.messageId}
                            userName={message.userName}
                            message={message.messageContent}
                        />)
                    : <Text>No messages currently posted. Try posting one to Start!!</Text>
                }
            </span>
        </div>
    )
};

/*
It does have a little logic that displays a nice message 
about not yet having seen any messages if the list of messages is empty. 
Otherwise, it renders a list of messages to the browser. 

Message structure is exactly the same as the one defined in the message POJO on the backend. 
By keeping the structure of the messages identical between the frontend and the backend, 
it’s easier for the developer to understand which properties map to which parameters 
as the message works its way through the system.
*/
