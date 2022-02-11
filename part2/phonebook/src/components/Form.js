import React from 'react'

const Form = ( 
  {updatePersons, newName, newNumber,
   handleNameCHange, handleNumberCHange} 
) => {
  return (
    <form onSubmit={updatePersons}>
      <div>
        name: 
        <input 
          value={newName}
          onChange={handleNameCHange}
        />
      </div>
      <div>
        number: 
        <input 
        type={"tel"}
          value={newNumber}
          onChange={handleNumberCHange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form