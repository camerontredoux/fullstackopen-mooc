const Country = (props) => {

  const country = props.country

  if (props.countries.length === 1) {
    const languages = Object.values(country.languages).map(language => {
      return <li key={language} > {language}</li>
    })
    const capitals = country.capital.map(capital => {
      return <li key={capital}>{capital}</li>
    })
    return (
      <>
        <h1>{country.name.common}</h1>
        <div>
          capital
          <ul>
            {capitals}
          </ul>
        </div>
        <div>
          population {country.population}
        </div>
        <h2>Languages</h2>
        <ul>
          {languages}
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
