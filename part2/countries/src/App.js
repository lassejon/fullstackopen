import axios from "axios"
import Search from "./components/Search"
import Countries from "./components/Countries"
import React, { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([])
  const [showCountries, setShowCountries] = useState(countries)
  const [newSearch, setNewSearch] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data);
        setCountries(response.data)
        setShowCountries(response.data)
      })
  }
  
  useEffect(hook, [])

  const SearchCountries = (event) => {
    event.preventDefault();

    const searchValue = event.target.value;
    
    setNewSearch(searchValue);
    setShowCountries(countries.filter(c => c.name.common.toLowerCase().includes(searchValue)))
  }

  const showSearch = () => {
    if (showCountries.length > 10 && newSearch.length >= 1) {
      return <p>Too many matches, specify another filter</p>
    } 
    if (showCountries.length === 1) {
      const country = showCountries[0];
      const languages = Object.entries(country.languages).map(element => {
        return <li>{element[1]}</li>
      });
      return <div>
              <h1>{country.name.common}</h1>
              <p>capital {country.capital}</p>
              <p>area {country.area}</p>
              <h3>languages:</h3>
              <ul>
                {languages}
              </ul>
            </div>
    }
    else {
      return <Countries countries={showCountries} />
    }
  }

  return (
    <>
    
      <Search 
        newSearch={newSearch}
        SearchCountries={SearchCountries}
      />

      {showSearch()}

    </>
  );
}

export default App;