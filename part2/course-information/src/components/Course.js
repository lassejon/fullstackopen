import React from "react"

const Header = ({course}) => {
    const name = course.name
    return (
      <h1>{name}</h1>
    )
  }
  
  const Part = ({part}) => {
    return (
      <div>
        {part.name} {part.exercises}
      </div>
    )
  }
  
  const Content = ({course}) => {
    const parts = course.parts
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  
  const Total = ({course}) => {
    const parts = course.parts;
    return (
      <p><b>total of exercises {parts.reduce((result, current) => result + current.exercises, 0)}</b></p>
    )
  }
  
  const Course = ({course}) => {
    return (
      <>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
      </>
    )
  }

  export default Course;