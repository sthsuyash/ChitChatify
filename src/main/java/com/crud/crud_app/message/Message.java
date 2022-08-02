package com.crud.crud_app.message;

public class Message {
    private final String userName;
    private final String messageContent;

    public Message(String userName, String messageContent) {
        this.userName = userName;
        this.messageContent = messageContent;
    }

    public String getUserName() {
        return userName;
    }

    public String getMessageContent() {
        return messageContent;
    }
}

/*  The message object is a POJO, a simple Java object
    that defines the shape of a message traveling
    between the backend and the frontend
 */
