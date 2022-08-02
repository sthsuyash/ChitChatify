// This is where users compose messages. 

import React, { useState } from "react";
import { TextInput, Button, Text } from "evergreen-ui";

export default function MessageBox(props) {
    const sendMessage = props.sendMessage;
    const [messageContent, updateContent] = useState("");
    const sendNewMessage = (newMessage) => {
        sendMessage(newMessage);
        updateContent("");
    };
    return (
        <div>
            <Text size={500} className="margin-right">Send a Message:</Text>
            <TextInput className="margin-right" type="textbox" name="newMessage" placeholder="Enter a new message here..." value={messageContent} onChange={e => updateContent(e.target.value)} />
            <Button appearance="primary" onClick={() => sendNewMessage(messageContent)}>Send Message</Button>
        </div>
    )
}

/*
The MessageBox is a basic text box. 
The code adds some styles from Evergreen UI and 
a button that finalizes the message and sends it to the server. 

After sending the message to the server, 
it clears the chat box (no double-posting messages!).
*/
