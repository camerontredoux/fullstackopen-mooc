import Country from "./Country"

const CountryList = (props) => {
  const filtered = props.countryList.filter(c => {
    return c.name.common.toLowerCase().includes(props.country.toLowerCase())
  })

  return (
    <>
      {filtered.length > 10 ? "Too many matches, specify another filter" : filtered.map(c => <Country key={props.countryList.indexOf(c)} name={c.name.common} />)}
    </>
  )
}

export default CountryList
