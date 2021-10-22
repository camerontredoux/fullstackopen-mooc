import React, { useState } from "react"

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      <Part part={parts[0].part} exercises={parts[0].exercises} />
      <Part part={parts[1].part} exercises={parts[1].exercises} />
      <Part part={parts[2].part} exercises={parts[2].exercises} />
    </>
  )
}

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  )
}

const Button = ({ onClick, name }) => {
  return (
    <button onClick={onClick}>{name}</button>
  )
}

const Display = ({ text }) => {
  return (
    <> {text} </>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <p>No items in the list!</p>
    )
  } else {
    return (
      <p>Click history {props.allClicks.join(" ")}</p>
    )
  }
}

const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const [value, setValue] = useState(0)

  const setToValue = (val) => () => {
    setValue(val)
  }

  const handleClickLeft = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleClickRight = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const zero = () => {
    setLeft(0)
    setRight(0)
    setAll([])
  }

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        part: 'Fundamentals of React',
        exercises: 10
      },
      {
        part: 'Using props to pass data',
        exercises: 7
      },
      {
        part: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Display text={left} />
      <Button onClick={handleClickLeft} name="Left" />
      <Button onClick={handleClickRight} name="Right" />
      <Display text={right} />
      <Button onClick={zero} name="Zero" />
      <History allClicks={allClicks} />
      <Button onClick={setToValue(value + 1)} name="Test" />
      <Display text={value} />
    </>
  )
}

// const App = () => {

//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0
//   })

//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         part: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         part: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         part: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   const handleClickLeft = () => {
//     setClicks({
//       ...clicks,
//       left: clicks.left + 1
//     })
//   }

//   const handleClickRight = () => {
//     setClicks({
//       ...clicks,
//       right: clicks.right + 1
//     })
//   }

//   return (
//     <>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//       <Display text={clicks.left} />
//       <Button onClick={handleClickLeft} name="Left" />
//       <Button onClick={handleClickRight} name="Right" />
//       <Display text={clicks.right} />
//     </>
//   );
// }

export default App
