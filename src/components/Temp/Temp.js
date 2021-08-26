import React from 'react'
import styles from './Temp.module.css'

const Temp = ({temp, maxTemp, minTemp}) => {
    return (
        <div className={styles.text}>
            <span className={styles.currentTemp}>{Math.floor(temp)}°</span>
            <span className={styles.minMaxTemp}>{Math.floor(minTemp)}°/{Math.floor(maxTemp)}°</span>
        </div>
    )
}

export default Temp
