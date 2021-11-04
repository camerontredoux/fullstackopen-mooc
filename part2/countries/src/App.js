import React, { useState, useEffect } from 'react'
import axios from "axios"
import Form from './components/Form'
import CountryList from './components/CountryList'

const App = () => {

  const [country, setCountry] = useState('')
  const [countryList, setCountryList] = useState([])

  // useEffect(() => {
  //   axios.get("https://www.bungie.net/Platform/Destiny2/3/Account/4611686018480403495/Character/2305843009384004160/Stats", {
  //     onUploadProgress: progressEvent => {
  //       console.log(progressEvent);
  //       const total = parseFloat(progressEvent)
  //       const current = progressEvent.loaded
  //       let percentCompleted = Math.floor(current / total * 100)
  //       console.log('completed: ', percentCompleted)
  //     },
  //     headers: {
  //       "X-API-Key": "5de4d04c636c4cddaefccbf7e453acd1"
  //     }
  //   }).then(res => {
  //     console.log(res.data);
  //     setCountryList(res.data)
  //   })
  // }, [])

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
    <>
      <Form handleFormSubmit={handleFormSubmit} handleFormChange={handleFormChange} />
      <CountryList countryList={countryList} country={country} />
    </>
  )
}

export default App
