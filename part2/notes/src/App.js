import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Notes from './components/Notes'
import axios from "axios"

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("a new note...")
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log("effect");
    const eventHandler = res => {
      console.log("finished retrieving data");
      let data = res.data
      setNotes(data)
    }

    const promise = axios.get("http://localhost:3001/notes")
    promise.then(eventHandler)
  }

  useEffect(hook, [])
  console.log("render", notes.length, " notes");

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject))
    setNewNote("")
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <Notes notesToShow={notesToShow} />
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>
      <Form addNote={addNote} newNote={newNote} handleNoteChange={handleNoteChange} />
    </div>
  )
}

export default App
