package com.crud.crud_app;

import com.crud.crud_app.connected.ConnectedUser;
import com.crud.crud_app.connected.ConnectedUserList;
import com.crud.crud_app.message.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class MessageController {
    ConnectedUserList userList = new ConnectedUserList();

    @MessageMapping("/chat")
    @SendTo("/chat")
    public Message index(Message message){
        return message;
    }

    @MessageMapping("/chat/connected_users")
    @SendTo("/chat/connected_users")
    public ConnectedUserList connectedUserList(ConnectedUser user){
        userList.handleUser(user);
        return userList;
    }
}

/*
* Here, the app handles messages that come from the front end.
* */
