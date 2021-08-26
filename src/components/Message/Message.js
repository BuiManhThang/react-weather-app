import React, { useEffect } from 'react'
import styles from './Message.module.css'

const Message = ({text, onClose}) => {

    useEffect(() => {
        const autoClose = () => {
            onClose();
        }
        setTimeout(autoClose, 3000);
        return () => {
            clearTimeout(autoClose);
        } // eslint-disable-next-line
    }, [])

    const handleClose = () => {
        onClose();
    }
    return (
        <div className={styles.message__container}>
            <span onClick={handleClose} className={styles.message__close}><i className="fas fa-times"></i></span>
            <h2 className={styles.message__text}>{text}</h2>
        </div>
    )
}

export default Message
