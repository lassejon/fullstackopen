
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ( { country, countries, setShowCountries } ) => {
  const languages = Object.entries(country.languages).map((language, id) => {
    return <li key={id}>{language[1]}</li>
  });

  const back = () => {
    setShowCountries(countries)
  }

  const [weather, setWeather] = useState({});
  
  const get = () => {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
    .then(response => {
      setWeather(response.data);
    })
  }

  useEffect(get, []);

  return (
    <div>
      <button onClick={back}>back</button>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>languages:</h3>
      <ul>
        {languages}
      </ul>
      <img src={country.flags.png} alt="flag"></img>
      <h1>Weather in {country.capital}</h1>
      <div>temperature {weather.weather}</div>
    </div>
  )
}

export default Country