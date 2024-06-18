import React from 'react';
import styles from './TimeDisplay.module.scss'

const TimeDisplay = ({ time }) => {
    return (
        <div className={styles.timeDisplayWrapper}>
            <p className={styles.timeDisplayText}>{time}</p>
        </div>
    );
};

export default TimeDisplay;