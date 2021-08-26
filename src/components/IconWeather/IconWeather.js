import React from 'react'
import styles from './IconWeather.module.css'

const IconWeather = ({weather}) => {
    return (
        <div className={styles.icon}>
            {Math.floor(weather/100) === 5 && <i className="fas fa-cloud-rain"></i>}
            {Math.floor(weather/100) === 8 && weather >= 802 && <i className="fas fa-cloud"></i>}
            {Math.floor(weather/100) === 8 && weather === 800 && <i className="fas fa-sun"></i>}
            {Math.floor(weather/100) === 8 && weather === 801 && <i className="fas fa-cloud-sun"></i>}
            {Math.floor(weather/100) === 3 && <i className="fas fa-cloud-showers-heavy"></i>}
            {Math.floor(weather/100) === 6 && <i className="far fa-snowflake"></i>}
            {Math.floor(weather/100) === 7 && <i className="fas fa-smog"></i>}
            {Math.floor(weather/100) === 2 && <i className="fas fa-bolt"></i>}
        </div>
    )
}

export default IconWeather
