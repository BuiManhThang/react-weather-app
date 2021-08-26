import axios from 'axios';
import { useState } from 'react';

const appid = process.env.REACT_APP_APIID;

const getMinMaxTemp = (data) => {
    const min = data.reduce((pre, cur) => {
        if(cur.main.temp_min < pre) {
            return cur.main.temp_min;
        }
        return pre;
    }, data[0].main.temp_min);
    const max = data.reduce((pre, cur) => {
        if(cur.main.temp_max > pre) {
            return cur.main.temp_min;
        }
        return pre;
    }, data[0].main.temp_max);
    data[0].main = {...data[0].main, temp_min: min, temp_max: max};
    return {...data[0]};
}

const getDataFiveDay = (array, data) => {
    const day = [];
    array.forEach((ele) => {
        const instaint = [];
        data.forEach(dataEle => {
            if(ele.dt_txt.split(' ')[0] === dataEle.dt_txt.split(' ')[0]) {
                instaint.push(dataEle);
            }
        })
        day.push(instaint);
    })
    const result = day.map(ele => {
        return getMinMaxTemp(ele);
    });
    return result;
}

const useApi = () => {
    const [fiveDay, setFiveDay] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dataNow, setDataNow] = useState(null);
    const [error, setError] = useState(null);

    const getData = (city) => {
        setLoading(true);
        Promise.all([
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appid}&lang=vi&units=metric`),
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric&lang=vi`)
        ])
        .then(([res, res2]) => { 
            const dataFiveDay = [];
            res.data.list.forEach(data => {
                const isExist = dataFiveDay.find(day => {
                    return data.dt_txt.split(' ')[0] === day.dt_txt.split(' ')[0]; 
                })
                if(!isExist) {
                    dataFiveDay.push(data);
                }
            })
            while(dataFiveDay.length > 5) {
                dataFiveDay.pop();
            }
            const newDataFiveDay = getDataFiveDay(dataFiveDay, res.data.list);
            newDataFiveDay[0].weather = res2.data.weather;
            setFiveDay(newDataFiveDay);
            setDataNow(res2.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err.response.data.message);
            setError(err.response.data.message);
            setLoading(false);
        })
    }

    return [getData, fiveDay, loading, dataNow, error, setError]
}

export default useApi;