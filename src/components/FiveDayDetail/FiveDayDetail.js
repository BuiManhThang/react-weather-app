import React from 'react'
import styles from './FiveDayDetail.module.css'

const FiveDayDetail = ({data}) => {
    const formattedDay = (str) => {
        switch(str) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            default:
                return;
        }
    }
    return (
        <ul className={styles.list}>
            {data.map((day, index) => {
                const date = new Date(day.dt_txt);
                const weather = day.weather[0].id;
                const minTemp = Math.floor(day.main.temp_min);
                const maxTemp = Math.floor(day.main.temp_max);
                return <li className={styles.item} key={index}>
                            <span className={styles.date}>{formattedDay(date.getDay())}</span>
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
                            <span className={styles.temp}>{minTemp}° {maxTemp}°</span>
                        </li>
            })}
            {/* <li className={styles.item}>
                <span className={styles.date}>Friday</span>
                <span className={styles.icon}><i className="fas fa-cloud-sun-rain"></i></span>
                <span className={styles.temp}>{minTemp}° {maxTemp}°</span>
            </li>
            <li className={styles.item}>
                <span className={styles.date}>Saturday</span>
                <span className={styles.icon}><i className="fas fa-cloud-sun-rain"></i></span>
                <span className={styles.temp}>{minTemp}° {maxTemp}°</span>
            </li>
            <li className={styles.item}>
                <span className={styles.date}>Sunday</span>
                <span className={styles.icon}><i className="fas fa-cloud-sun-rain"></i></span>
                <span className={styles.temp}>{minTemp}° {maxTemp}°</span>
            </li>
            <li className={styles.item}>
                <span className={styles.date}>Monday</span>
                <span className={styles.icon}><i className="fas fa-cloud-sun-rain"></i></span>
                <span className={styles.temp}>{minTemp}° {maxTemp}°</span>
            </li>
            <li className={styles.item}>
                <span className={styles.date}>Tuesday</span>
                <span className={styles.icon}><i className="fas fa-cloud-sun-rain"></i></span>
                <span className={styles.temp}>{minTemp}° {maxTemp}°</span>
            </li> */}
        </ul>
    )
}

export default FiveDayDetail
