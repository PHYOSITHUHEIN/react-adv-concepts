import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  //state for weather
  const [weather, setWeather] = useState(null);
  //state for city weather
  const [city, setCity] = useState('');
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=Yangon`
      )
      .then((data) => {
        setWeather(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //searchCity
  const searchCity = (e) => {
    setCity(e.target.value);
  };
  //searchWeather
  const searchWeather = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key= e0d9b78b41454aa1aec32839211501&q=${city}`
      )
      .then((data) => {
        setWeather(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <div className="search">
        <input onChange={searchCity} type="text" />
        <button onClick={searchWeather}>Search</button>
      </div>
      {weather && (
        <div className="weather-info">
          <h1>{weather.location.country}</h1>
          <h2>{weather.location.region}</h2>
          <div className="weather-condition">
            <h2>{weather.current.condition.text}</h2>
            <img src={weather.current.condition.icon} alt="weather icon" />
            <h3>{weather.current.temp_c}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
