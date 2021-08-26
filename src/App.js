import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import IconWeather from './components/IconWeather/IconWeather';
import Loading from './components/Loading/Loading';
import Temp from './components/Temp/Temp';
import FiveDay from './components/FiveDay/FiveDay';
import Nothing from './components/Nothing/Nothing';
import Message from './components/Message/Message';
import useApi from './customs/useApi';
import useGeoLocation from './customs/useGeoLocation';
import { useEffect, useState } from 'react';

function App() {
  const [getData, fiveDay, loading, dataNow, error, setError] = useApi();
  const [geoLocation, loadingGeoLocation, fetchGeoLocation] = useGeoLocation();
  const [city, setCity] = useState(null);

  useEffect(() => {
    if(city) {
      getData(city) 
    } // eslint-disable-next-line
  }, [city]);

  useEffect(() => {
    if(geoLocation) {
      setCity(geoLocation);
    }
  }, [geoLocation])

  const handleSubmit = (text) => {
    setCity(text);
  }


  const handleGetLocation = (location) => {
    fetchGeoLocation(location);
  }
  return (
    <div className="App">
      <Container>
        <Header city={dataNow?.name} onCitySubmit={handleSubmit} onGetLocation={handleGetLocation} ></Header>
        {(loading || loadingGeoLocation) ? <Loading></Loading> : !dataNow ? <Nothing text="Open location service or Enter the city" ></Nothing> : 
          <>
            <IconWeather weather={dataNow.weather[0].id}></IconWeather>
            <Temp temp={dataNow.main.temp} minTemp={fiveDay[0]?.main?.temp_min} maxTemp={fiveDay[0]?.main?.temp_max} ></Temp>
            <FiveDay data={fiveDay}></FiveDay>
          </>        
        }
        {error && <Message text={error} onClose={() => setError(null)} ></Message>}
      </Container>
    </div>
  );
}

export default App;
