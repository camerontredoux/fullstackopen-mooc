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

function Statistics(props) {
  const total = props.bad + props.good + props.neutral

  const average = parseFloat((props.stats.reduce((a, b) => a + b, 0) / props.stats.length)).toPrecision(4)
  const positivesAverage = parseFloat((props.stats.filter(stat => stat === 1).reduce((a, b) => a + b, 0) / props.stats.length) * 100).toPrecision(4)

  if (props.stats.length > 0) {
    return (
      <>
        <table className="table">
          <tr>
            <th>Good</th>
            <th>Neutral</th>
            <th>Bad</th>
            <th>All</th>
            <th>Average</th>
            <th>Positives</th>
          </tr>
          <tr>
            <td>{props.good}</td>
            <td>{props.neutral}</td>
            <td>{props.bad}</td>
            <td>{total}</td>
            <td>{average}</td>
            <td>{positivesAverage}%</td>
          </tr>
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

  const [stats, setStats] = useState([])

  function handleGoodClick() {
    const arr = {
      good: good + 1,
      neutral: neutral,
      bad: bad
    }
    setGood(arr.good)
    setStats(stats.concat(1))
  }

  function handleNeutralClick() {
    const arr = {
      good: good,
      neutral: neutral + 1,
      bad: bad
    }
    setNeutral(arr.neutral)
    setStats(stats.concat(0))
  }

  function handleBadClick() {
    const arr = {
      good: good,
      neutral: neutral,
      bad: bad + 1
    }
    setBad(arr.bad)
    setStats(stats.concat(-1))
  }

  return (
    <>
      <Heading name="Give Feedback" />
      <Button handleClick={handleGoodClick} name="Good" />
      <Button handleClick={handleNeutralClick} name="Neutral" />
      <Button handleClick={handleBadClick} name="Bad" />
      <Heading name="Statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} stats={stats} />
    </>
  )
}
