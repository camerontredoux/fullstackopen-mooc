const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

const Notes = ({ notesToShow }) => {
  return (
    <ul>
      {notesToShow.map(note =>
        <Note key={note.id} note={note} />
      )}
    </ul>
  )
}

export default Notes
