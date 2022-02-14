import React from 'react'

const Countries = ( {countries, setShowCountries} ) => {
  
  return (
    <div>
      {countries.map(country => {
        const setCountriesAll = () => {
          setShowCountries([ country ])
        }
        
        return (
          <div key={country.cca2}>
            {country.name.common}
            <button onClick={setCountriesAll}>show</button>
          </div>
        )
      })}
    </div>
  )
}

export default Countries