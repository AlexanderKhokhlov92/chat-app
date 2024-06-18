import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import styles from './ChatRoom.module.scss';

const ChatRoom = () => {
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setMessages([...messages, { ...message, time: currentTime }]);
    };

    return (
        <div className={styles.chatApp}>
            <MessageList messages={messages} />
            <MessageInput addMessage={addMessage} />
        </div>
    );
};

export default ChatRoom;
