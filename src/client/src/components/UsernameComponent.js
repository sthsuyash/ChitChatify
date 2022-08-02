import React from 'react';
import { Text, TextInput } from 'evergreen-ui';

const UsernameComponent = (props) => {
    const { updateUserName, currentUserName } = props;
    return (
        <div>
            <Text size={500} className="margin-right">What is your name?</Text>
            <TextInput type="text" name="username" onChange={e => updateUserName(e.target.value)} defaultValue={currentUserName} />
        </div>
    )
}

export default UsernameComponent;


/*
The username component is just a simple text label with a text input. 
In this case, the code uses Text and TextInput components from EvergreenUI, 
a gorgeous React component styling library. 
When the text input in your component recognizes a change event, 
it updates the value of the user name using the updateUsername function defined by hook in App.js.
*/
