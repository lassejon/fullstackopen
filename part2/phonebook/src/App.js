import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import Form from "./components/Form"
import Phonebook from "./components/Phonebook"
import axios from "axios"

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [showPersons, setShowPersons] = useState(persons)

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        setShowPersons(response.data)
      })
  }
  
  useEffect(hook, [])

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

      <Form 
        updatePersons={updatePersons}
        newName={newName}
        newNumber={newNumber}
        handleNameCHange={handleNameCHange}
        handleNumberCHange={handleNumberCHange}
      />

      <h3>Numbers</h3>

      <Phonebook 
        persons={showPersons}
      />
      
  </div>)
}

export default App