import { Typography, styled } from "@mui/material"
import Capitals from "./Capitals";

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(0),
}));

const Country = (props) => {

  const country = props.country

  if (props.countries.length === 1) {
    const languages = "languages" in country ? Object.values(country.languages).map(language => {
      return <li key={language} > {language}</li>
    }) : <Typography fontFamily="Roboto" color="text.primary" variant="button">{"No languages"}</Typography>

    return (
      <>
        <Typography fontFamily="Roboto" color="text.primary" variant="h4">
          {country.name.common}
        </Typography>
        <Capitals country={props.country} />
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
  } else {
    return (
      <li key={country.name.common}>{country.name.common}</li>
    )
  }
}

export default Country
