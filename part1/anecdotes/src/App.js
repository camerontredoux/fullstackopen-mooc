import React, { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
]

function MostVotes({ mostVotes, votes }) {

  if (mostVotes !== -1) {
    return (
      <>
        <p>{anecdotes[mostVotes]}</p>
        <p>This anecdote has {votes[mostVotes]} votes</p>
      </>
    )
  }
  return (
    <p>No votes cast!</p>
  )

}

export default function App() {
  function calcRand() {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const [selected, setSelected] = useState(calcRand())
  const [votes, setVotes] = useState({})
  const [mostVotes, setMostVotes] = useState(-1)

  function vote() {
    const arr = {
      ...votes,
      [selected]: (votes[selected] || 0) + 1
    }
    if (!votes[mostVotes] || votes[selected] + 1 > votes[mostVotes]) {
      setMostVotes(selected)
    }
    setVotes(arr)
  }

  function handleClick() {
    let random = calcRand()
    while (random === selected) {
      random = calcRand()
    }
    setSelected(random)
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has {votes[selected] > 0 ? votes[selected] : "no"} votes</p>
      <button onClick={handleClick}>next anecdote</button>
      <button onClick={vote}>vote</button>
      <h2>Anecdote with the most votes</h2>
      <MostVotes mostVotes={mostVotes} votes={votes} />
    </div>
  )
}
