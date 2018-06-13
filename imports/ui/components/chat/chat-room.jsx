// Imports
import React from 'react';
import moment from 'moment';

// Chat Room Component
class ChatRoom extends React.Component {

    render() {
        return (
            <div>
                <h3>Chat Room Title</h3>
                <p>Chat room description</p>
            </div>
        )
    }

}

// Properties
ChatRoom.propTypes = {
    chatRoom: React.PropTypes.object
};

// Finally, export the Component
export default ChatRoom;