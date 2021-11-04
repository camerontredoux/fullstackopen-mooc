import React, { useState, useEffect } from 'react'
import axios from "axios"
import Form from './components/Form'
import CountryList from './components/CountryList'
import "./index.css"

const App = () => {

  const [country, setCountry] = useState('')
  const [countryList, setCountryList] = useState([])

  useEffect(() => {
    axios.get("/api").then(res => {
      setCountryList(res.data)
    })
  }, [])

  const handleFormSubmit = (event) => {
    event.preventDefault()
  }

  const handleFormChange = (event) => {
    setCountry(event.target.value)
  }

  return (
    <div className="app">
      <Form handleFormSubmit={handleFormSubmit} handleFormChange={handleFormChange} />
      <CountryList countryList={countryList} country={country} />
    </div>
  )
}

export default App
