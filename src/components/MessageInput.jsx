import React, { useState } from 'react';
import styles from './MessageInput.module.scss'
import MessageInputActions from './MessageInputActions';

const MessageInput = ({ addMessage }) => {
    const [text, setText] = useState('');
    const [username, setUsername] = useState('You');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        addMessage({ username, text });
        setText('');
    };

    return (
        <form className={styles.messageActionsWrapper} onSubmit={handleSubmit}>
            <input
                className={styles.messageActionsInput}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type your message..."
            />
            <MessageInputActions/>
        </form>
    );
};

export default MessageInput;
