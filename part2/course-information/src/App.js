import React from 'react'

const Header = (course) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = (part) => {
  return (
    <div>
      {part.name} {part.exercises}
    </div>
  )
}

const Content = (course) => {
  return (
    <div>
      {course.parts.map(part => <Part part={part}/>)}
    </div>
  )
}

const Total = (course) => {
  return (
    <p>Number of exercises {course.parts.reduce((prev, current) => prev + current.exercises, 0)}</p>
  )
}

const Course = (course) => {
  return (
    <>
      <Header props={course}/>
      <Content props={course}/>
      <Total props={course}/>
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App