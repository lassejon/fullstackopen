import React, { useState } from 'react'
import Filter from "./components/Filter"

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [showPersons, setShowPersons] = useState(persons)

  const updatePersons = (event) => {
    event.preventDefault();

    const person = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }

    if (persons.filter(p => p.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setNewNumber('');
    setNewName('');
    const newPersons = persons.concat(person);
    setPersons(newPersons)
    setShowPersons(newPersons)
  }

  const SearchPersons = (event) => {
    event.preventDefault();

    const searchValue = event.target.value;
    
    setNewSearch(searchValue);
    setShowPersons(persons.filter(p => p.name.toLowerCase().includes(searchValue)))
  }

  const handleNameCHange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberCHange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter 
        newSearch={newSearch}
        SearchPersons={SearchPersons}
      />

      <h3>add a new</h3>

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

      <h3>Numbers</h3>

      <div>
        {showPersons.map(person => 
          <div key={person.id}>
            <b>{person.name} {person.number}</b>
          </div>
        )}
      </div>
      
  </div>)
}

export default App