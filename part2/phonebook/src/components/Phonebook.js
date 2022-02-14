const Phonebook = ( {persons} ) => {
  return (
    <div>
      {persons.map(person => 
        <div key={person.id}>
          <b>{person.name} {person.number}</b>
        </div>
      )}
    </div>
  )
}

export default Phonebook