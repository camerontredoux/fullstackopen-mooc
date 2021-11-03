const Form = (props) => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      Find countries: <input onChange={props.handleFormChange}></input>
    </form>
  )
}

export default Form
