import React, { useState } from 'react'
import Note from './components/Note.js'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)


  const addNote = (event) => {
    event.preventDefault()

    const newNoteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    setNotes(notes.concat(newNoteObject))
    setNewNote("")
  }

  const handleNoteChange = (event) => {
    
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
      />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default App