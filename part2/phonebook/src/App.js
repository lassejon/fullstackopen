import React, { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [newName, setNewName] = useState('')

  const updatePersons = (event) => {
    event.preventDefault();

    const person = {
      name: newName
    }

    setNewName('');
    setPersons(persons.concat(person))
  }

  const handleNameCHange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={updatePersons}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameCHange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App