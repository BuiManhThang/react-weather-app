import React from 'react'
import styles from './FiveDaySummary.module.css'

const FiveDaySummary = ({data}) => {
    return (
        <ul className={styles.list}>
            {data.map((day, index) => {
                const date = new Date(day.dt_txt);
                const weather = day.weather[0].id;
                return <li className={styles.item} key={index}>
                            <span className={styles.date}>{date.getDate()}</span>
                            <span className={styles.icon}>
                                {Math.floor(weather/100) === 5 && <i className="fas fa-cloud-rain"></i>}
                                {Math.floor(weather/100) === 8 && weather >= 802 && <i className="fas fa-cloud"></i>}
                                {Math.floor(weather/100) === 8 && weather === 800 && <i className="fas fa-sun"></i>}
                                {Math.floor(weather/100) === 8 && weather === 801 && <i className="fas fa-cloud-sun"></i>}
                                {Math.floor(weather/100) === 3 && <i className="fas fa-cloud-showers-heavy"></i>}
                                {Math.floor(weather/100) === 6 && <i className="far fa-snowflake"></i>}
                                {Math.floor(weather/100) === 7 && <i className="fas fa-smog"></i>}
                                {Math.floor(weather/100) === 2 && <i className="fas fa-bolt"></i>}
                            </span>
                        </li>
            })}
        </ul>
    )
}

export default FiveDaySummary
