const Form = (props) => {
  return (
    <form onSubmit={props.addNote}>
      <input value={props.newNote} onChange={props.handleNoteChange} />
      <button type="submit">save</button>
    </form>
  )
}

export default Form
