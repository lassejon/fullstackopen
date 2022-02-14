import React from 'react'

const Search = ( {newSearch, SearchCountries}) => {
  return (
    <>
      find countries
      <input 
        value={newSearch}
        onChange={SearchCountries}
      />
    </>
  )
}

export default Search