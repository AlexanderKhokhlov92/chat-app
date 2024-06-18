import styles from './MessageInputActions.module.scss'

const MessageInputActions = () => {
    return (<div className={styles.actionsWrapper}>
        <div className={styles.buttonsWrapper}>
        </div>
                <button className={styles.sendButton}       type="submit">
                    Send
                </button>
            </div>)
}

export default MessageInputActions