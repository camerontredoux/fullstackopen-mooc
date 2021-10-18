import React from "react"

function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

function Part(props) {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  )
}

function Content(props) {
  return (
    <>
      <Part part={props.part[0].part} exercise={props.part[0].exercise} />
      <Part part={props.part[1].part} exercise={props.part[1].exercise} />
      <Part part={props.part[2].part} exercise={props.part[2].exercise} />
    </>
  )
}

function Total(props) {
  return (
    <>
      <p>
        Number of exercises {props.exercises[0].exercise + props.exercises[1].exercise + props.exercises[2].exercise}
      </p>
    </>
  )
}

export default function App() {
  const course = 'Half Stack application development'

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    { part: part1, exercise: exercises1 },
    { part: part2, exercise: exercises2 },
    { part: part3, exercise: exercises3 }
  ]

  return (
    <>
      <Header course={course} />
      <Content part={parts} />
      <Total exercises={parts} />
    </>
  );
}
