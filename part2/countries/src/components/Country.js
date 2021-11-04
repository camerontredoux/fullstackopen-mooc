import { ListItem, Typography, List, ListItemButton, ListItemText } from "@mui/material"
import { useState } from "react";
import Capitals from "./Capitals";

const CountryInfo = ({ country, languages }) => {
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
