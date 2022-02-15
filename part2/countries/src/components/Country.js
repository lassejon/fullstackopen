
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ( { country, countries, setShowCountries } ) => {
  const languages = Object.entries(country.languages).map((language, id) => {
    return <li key={id}>{language[1]}</li>
  });

  const back = () => {
    setShowCountries(countries)
  }

  const [weather, setWeather] = useState();
  
  useEffect(() => {
    const name = country.name.common
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
    .then(response => {
      setWeather(response.data);
    })
  }, [])

  const weatherComponent = () => {
    if (weather === undefined) {
      return <div></div>
    }

    const temperatureConverter = (temp) => {
      return (temp - 273.15).toFixed(2)
    }

    const iconId = weather.weather[0].icon;
    const temperature = temperatureConverter(weather.main.temp)
    const windSpeed = weather.wind.speed;

    return (
      <>
        <div>temperature {temperature} celsius</div>
        <img src={`http://openweathermap.org/img/wn/${iconId}@2x.png`} alt="weather-icon"></img>
        <div>wind {windSpeed} m/s</div>
      </>
    )
  }


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
      {weatherComponent()}
    </div>
  )
}

export default Country