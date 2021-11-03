import React, { useState, useEffect } from 'react'
import Persons from "./components/Persons"
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from "axios"

const App = () => {
  const [persons, setPersons] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/persons")
      .then(res => {
        setPersons(res.data)
      })
  }, [])
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
