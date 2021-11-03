const Person = ({ person }) => {
  return (
    <li>{person.name} {person.phone}</li>
  )
}

const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map(person => <Person key={person.name} person={person} />)}
    </ul>
  )
}

export default Persons
