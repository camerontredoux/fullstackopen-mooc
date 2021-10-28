import React from "react"

function Header({ name }) {
  return <h1>{name}</h1>
}

function Total({ parts }) {

  const total = parts.reduce((acc, amt) => acc + amt.exercises, 0)

  return (
    <>
      <b>total of {total} exercises</b>
    </>
  )
}

function Part({ part }) {
  return <p>{part.name} {part.exercises}</p>
}

function Content({ parts }) {
  return (
    <>
      {parts.map(part => {
        return <Part key={part.id} part={part} />
      })}
    </>
  )
}

function Course({ course }) {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course
