import React from 'react'
import styles from './FiveDay.module.css'
import FiveDaySummary from '../FiveDaySummary/FiveDaySummary'
import FiveDayDetail from '../FiveDayDetail/FiveDayDetail'

const FiveDay = ({data}) => {
    return (
        <div className={styles.container}>
            <FiveDaySummary data={data}></FiveDaySummary>
            <FiveDayDetail data={data}></FiveDayDetail>
        </div>
    )
}

export default FiveDay
