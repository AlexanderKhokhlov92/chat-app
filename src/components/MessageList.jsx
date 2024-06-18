import React from 'react';
import styles from './MessageList.module.scss'
import TimeDisplay from './TimeDisplay';

const MessageList = ({ messages, time }) => {
    return (
        <div className={styles.chatWindow}>
            {messages.map((message, index) => (
                <div className={styles.messageWrapper} key={index}>
                    <div className={styles.textWindow}><p>{message.text}</p>< TimeDisplay time={message.time}/></div>
                </div>
            ))}
        </div>
    );
};

export default MessageList;
