const PersonForm = (props) => {
  return (
    <form onSubmit={props.formSubmit}>
      <div>
        name: <input onChange={props.handleInputChange} />
      </div>
      <div>
        number: <input onChange={props.handlePhoneChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
