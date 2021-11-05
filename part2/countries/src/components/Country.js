import { ListItem, Typography, List, ListItemButton, ListItemText } from "@mui/material"
import { useState, useEffect } from "react";
import Capitals from "./Capitals";
import axios from "axios"

const CountryInfo = ({ country, languages }) => {
  const capital = "capital" in country ? country.capital[0] : ""
  const [weather, setWeather] = useState({})
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`).then(res => {
      setWeather(res.data)
    }).catch(e => {
      console.log(e);
    })
  }, [capital])

  return (
    <>
      <Typography fontFamily="Roboto" color="text.primary" variant="h4">
        {country.name.common}
      </Typography>
      <Capitals country={country} />
      <div>
        Population: {Intl.NumberFormat().format(country.population)}
      </div>
      <Typography fontFamily="Roboto" color="text.primary" variant="h4">
        {"Languages "}
      </Typography>
      <ul>
        <Typography fontFamily="Roboto" color="text.primary" variant="body1">
          {languages}
        </Typography>
      </ul>
      <img src={country.flags.svg} alt="flag of country" width="200"></img>
      <Typography fontFamily="Roboto" color="text.primary" variant="h4">
        {"Weather"}
      </Typography>
      <div>
        Temperature: {"main" in weather && (weather.main.temp - 273.15).toFixed(2)} ºC
      </div>
    </>
  )
}

const Country = (props) => {

  const country = props.country
  const [showInfo, setShowInfo] = useState(false)

  const renderInfo = () => {
    showInfo ? setShowInfo(false) : setShowInfo(true)
  }

  const languages = "languages" in country ? Object.values(country.languages).map(language => {
    return <li key={language} > {language}</li>
  }) : <Typography fontFamily="Roboto" color="text.primary" variant="button">{"No languages"}</Typography>

  if (props.countries.length === 1) {
    return (
      <>
        <CountryInfo country={country} languages={languages} />
      </>
    )
  } else {
    return (
      <List disablePadding>
        <ListItem key={country.name.common} onClick={renderInfo} disablePadding>
          <ListItemButton>
            <ListItemText primary={country.name.common} />
          </ListItemButton>
        </ListItem>
        {showInfo && <CountryInfo country={country} languages={languages} />}
      </List>
    )
  }
}

export default Country
