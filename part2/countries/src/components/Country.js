const Country = (props) => {

  const country = props.country

  if (props.countries.length === 1) {
    const languages = country.hasOwnProperty("languages") ? Object.values(country.languages).map(language => {
      return <li key={language} > {language}</li>
    }) : <h3>No language</h3>
    const capitals = country.hasOwnProperty("capital") ? country.capital.map(capital => {
      return <li key={capital}>{capital}</li>
    }) : <h3>No capital</h3>
    return (
      <>
        <h1>{country.name.common}</h1>
        <div>
          Capital(s):
          <ul>
            {capitals}
          </ul>
        </div>
        <div>
          Population: {Intl.NumberFormat().format(country.population)}
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
