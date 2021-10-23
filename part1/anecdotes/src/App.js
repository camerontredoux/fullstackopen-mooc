import React, { useState } from 'react'

function MostVotes({ anecdotes, points }) {

  let max = points[0]
  let loc = 0

  for (let point in points) {
    if (points[point] > max) {
      max = points[point]
      loc = point
    }
  }
  // for (let dote in props.anecdotes) {
  //   console.log(props.anecdotes[dote]);
  // }

  return (
    <>
      <p>{anecdotes[loc]}</p>
      <p>This anecdote has {max} votes</p>
    </>
  )
}

export default function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  })

  function vote() {
    const arr = {
      ...points
    }
    arr[selected] += 1
    setPoints(arr)
  }

  function handleClick() {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has {points[selected]} votes</p>
      <button onClick={handleClick}>next anecdote</button>
      <button onClick={vote}>vote</button>
      <h2>Anecdote with the most votes</h2>
      <MostVotes anecdotes={anecdotes} points={points} />
    </div>
  )
}
