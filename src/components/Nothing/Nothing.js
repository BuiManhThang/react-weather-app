import React from 'react'
import styles from './Nothing.module.css'

const Nothing = ({text}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>{text}</h1>
            <div className={styles.icon}>
                <i className="fas fa-globe-asia"></i>
            </div>
        </div>
    )
}

export default Nothing
