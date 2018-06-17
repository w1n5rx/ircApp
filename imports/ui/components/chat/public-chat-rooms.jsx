// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';
import moment from 'moment';

// App Imports
import ChatRoomItem from './chat-room-item';

// Public Chat Rooms Component
class PublicChatRooms extends React.Component {
    componentWillMount() {
        this.state = {
            selectedChatRoomId: ''
        };
    }
    
    selectChatRoom({ _id }) {
        this.setState({
            selectedChatRoomId: _id
        });
    }
        
    renderChatRooms() {
        let chatRoomsList;

        if (this.props.publicChatRoomsLoaded) {
            chatRoomsList = (
                this.props.publicChatRooms.map((chatRoom) => (
                    <div className="card" key={ chatRoom._id } onClick={ ()=>this.selectChatRoom(chatRoom) }>
                        <div className="card-header">
                            { chatRoom.title }
                        </div>
                        <div className="card-body">
                            Some description
                        </div>
                        <div className="card-footer">
                            { moment(chatRoom.createdAt).fromNow() }
                        </div>
                    </div>
                ))
            )
        } else {
            chatRoomsList = (
                <p>Please wait...</p>
            )
        }

        return chatRoomsList;
    }

    render() {
        return (
            <div>
                <ReactHelmet
                    title="Public Chat Rooms - Simple Chat"
                />

                <div className="col s12 m4">
                    { this.renderChatRooms() }
                </div>

                <div className="col s12 m6">
                    <p>Select a chat room to begin.</p>
                </div>
            </div>
        )
    }

}

// Properties
PublicChatRooms.propTypes = {
    publicChatRoomsLoaded: React.PropTypes.bool,
    publicChatRooms: React.PropTypes.array
};

// Contexts
PublicChatRooms.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default PublicChatRooms;