const Filter = ({ handle }) => {
  return (
    <form>
      <div>
        search: <input onChange={handle} />
      </div>
    </form>
  )
}

export default Filter
