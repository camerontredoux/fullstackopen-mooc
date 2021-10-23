import React, { useState } from 'react'
import "./App.css"

function Heading(props) {
  return (
    <h1>{props.name}</h1>
  )
}

function Button(props) {
  return (
    <>
      <button onClick={props.handleClick}>{props.name}</button>
    </>
  )
}

function Statistics({ stats }) {
  const total = stats.bad + stats.good + stats.neutral

  const average = ((stats.bad * -1 + stats.good) / total).toPrecision(4)
  const positivesAverage = ((stats.good / total) * 100).toPrecision(4)
  if (total !== 0) {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Good (1)</th>
              <th>Neutral (0)</th>
              <th>Bad (-1)</th>
              <th>All</th>
              <th>Average</th>
              <th>Positives</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{stats.good}</td>
              <td>{stats.neutral}</td>
              <td>{stats.bad}</td>
              <td>{total}</td>
              <td>{average}</td>
              <td>{positivesAverage}%</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
  return (
    <p>No statistics</p>
  )
}

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  function handleGoodClick() {
    const arr = {
      ...stats,
      good: good + 1,
    }
    setGood(arr.good)
    setStats(arr)
  }

  function handleNeutralClick() {
    const arr = {
      ...stats,
      neutral: neutral + 1,
    }
    setNeutral(arr.neutral)
    setStats(arr)
  }

  function handleBadClick() {
    const arr = {
      ...stats,
      bad: bad + 1
    }
    setBad(arr.bad)
    setStats(arr)
  }

  return (
    <>
      <Heading name="Give Feedback" />
      <Button handleClick={handleGoodClick} name="Good" />
      <Button handleClick={handleNeutralClick} name="Neutral" />
      <Button handleClick={handleBadClick} name="Bad" />
      <Heading name="Statistics" />
      <Statistics stats={stats} />
    </>
  )
}
