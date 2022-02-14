import React from 'react'

const Countries = ( {countries} ) => {
  return (
    <div>
      {countries.map(country => 
        <div key={country.cca2}>
          {country.name.common}
        </div>
      )}
    </div>
  )
}

export default Countries