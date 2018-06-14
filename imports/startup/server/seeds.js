// Imports
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
// App Imports
import ChatRooms from '../../api/chat-rooms/collection';
import ChatRoomMembers from '../../api/chat-room-members/collection';
import Chats from '../../api/chats/collection';

// User
if(Meteor.users.find().count() == 0) {
    let users = [
        { username: 'politics', password: '123456'  },
        { username: 'money', password: '123456'  },
        { username: 'memes', password: '123456'  }
    ];

    users.forEach((user) => {
        Accounts.createUser(user);
    });

    const politics = Meteor.users.findOne({ username: 'politics' });
    const money = Meteor.users.findOne({ username: 'money' });
    const memes = Meteor.users.findOne({ username: 'memes' });

    // Chat Rooms
    if(ChatRooms.find().count() == 0) {
        const chatRoomId = ChatRooms.insert({ userId: politics._id, title: 'Politics Room', description: 'here we discuss about political climate.', isPubic: true });
        const chatRoomTwoId = ChatRooms.insert({ userId: money._id, title: 'Money Room', description: 'money talks.', isPubic: true });
        const chatRoomThreeId = ChatRooms.insert({ userId: memes._id, title: 'Memes Room', description: 'feel free to share memes.', isPubic: true });

        // Chat Room Members
        if(ChatRoomMembers.find().count() == 0) {
            ChatRoomMembers.insert({ chatRoomId, userId: politics._id });
            ChatRoomMembers.insert({ chatRoomId, userId: money._id });
            ChatRoomMembers.insert({ chatRoomId, userId: memes._id });
        }

        // Chats
        if(Chats.find().count() == 0) {
            Chats.insert({ chatRoomId, userId: politics._id, message: 'Welcome to politics room' });
            Chats.insert({ chatRoomId, userId: money._id, message: 'Welcome to money room' });
            Chats.insert({ chatRoomId, userId: memes._id, message: 'Welcome to memes room' });
        }
    }
}