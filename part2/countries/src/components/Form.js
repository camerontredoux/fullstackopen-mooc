const Form = (props) => {
  return (
    <form onSubmit={props.hFS}>
      Find countries: <input onChange={props.hFC}></input>
    </form>
  )
}

export default Form
