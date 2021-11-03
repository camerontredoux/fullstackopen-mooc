import React, { useState } from 'react'
import Persons from "./components/Persons"
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')

  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const searchedPeople = persons.filter(person => {
    return person.name.toLowerCase().includes(search.toLowerCase())
  })

  const formSubmit = (event) => {
    event.preventDefault()
    if (!persons.some(person => person.name === newName || person.phone === newPhone)) {
      setPersons(persons.concat({ name: newName, phone: newPhone }))
    } else {
      alert(`${newName} is already in the phonebook!`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handle={handleSearchChange} />
      <h2>Add new</h2>
      <PersonForm formSubmit={formSubmit} handlePhoneChange={handlePhoneChange} handleInputChange={handleInputChange} />
      <h2>Numbers</h2>
      <Persons persons={searchedPeople} />
    </div>
  )
}

export default App
