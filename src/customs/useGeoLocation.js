import axios from 'axios'
import { useState } from 'react'

const appid = process.env.REACT_APP_APIID;

const useGeoLocation = () => {
    const [geoLocation, setGeoLocation] = useState(null);
    const [loadingGeoLocation, setLoadingGeoLocation] = useState(false);

    const fetchGeoLocation = (location) => {
        setLoadingGeoLocation(true);
        setGeoLocation(null);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${Number(location.latitude).toFixed(2)}&lon=${Number(location.longitude).toFixed(2)}&appid=${appid}&lang=vi`)
        .then(res => {
            setGeoLocation(res.data.name);
            setLoadingGeoLocation(false);
        })
        .catch((err) => {
            console.log(err);
            setLoadingGeoLocation(false);
        })
    }

    return [geoLocation, loadingGeoLocation, fetchGeoLocation]
}

export default useGeoLocation;