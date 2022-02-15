import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import Form from "./components/Form"
import Phonebook from "./components/Phonebook"
import peopleService from "./services/people"

const App = () => {

  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [showPeople, setShowPeople] = useState(people)

  useEffect(() => {
    peopleService
      .getAll()
      .then(initialPeople => {
        console.log(initialPeople);
        setPeople(initialPeople)
        setShowPeople(initialPeople)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const createPerson = (event) => {
    event.preventDefault();

    const person = {
      name: newName,
      number: newNumber
    }

    const samePerson = 
      people.find(p => p.name.toLowerCase() === newName.toLocaleLowerCase())

    if (samePerson !== undefined) {
      person.id = samePerson.id
      person.name = samePerson.name

      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        peopleService
          .update(person)
          .then(returnedPerson => {
            const updatedPeople = people.map(p => p.id !== person.id ? p : returnedPerson)
            setPeople(updatedPeople)
            setShowPeople(updatedPeople)
          })
          .catch(error => {
            console.log(samePerson)
            console.log(person);
            console.log(error);
          })
      } 

      return
    }

    peopleService
      .create(person)
      .then(returnPerson => {
        setNewNumber('');
        setNewName('');
        const updatedPeople = people.concat(person);
        setPeople(updatedPeople)
        setShowPeople(updatedPeople)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const SearchPersons = (event) => {
    event.preventDefault();

    const searchValue = event.target.value;
    
    setNewSearch(searchValue);
    setShowPeople(people.filter(p => p.name.toLowerCase().includes(searchValue)))
  }

  const handleNameCHange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberCHange = (event) => {
    setNewNumber(event.target.value)
  }

  const removePerson = (person) => {
    const id = person.id
    if (window.confirm(`Delete ${person.name}`)) {
      peopleService
      .remove(id)
      .then(() => {
        const newPersons = people.filter(p => p.id !== id);
        setPeople(newPersons)
        setShowPeople(newPersons)
      })
      .catch(error => {
        console.log(error);
      })
    }
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
        createPerson={createPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameCHange={handleNameCHange}
        handleNumberCHange={handleNumberCHange}
      />

      <h3>Numbers</h3>

      <Phonebook 
        persons={showPeople}
        removePerson={removePerson}
      />
      
    </div>
  )
}

export default App