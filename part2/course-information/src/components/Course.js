import React from "react"

const Header = ({name}) => {
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
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  
  const Total = ({parts}) => {
    return (
      <p><b>total of exercises {parts.reduce((result, current) => result + current.exercises, 0)}</b></p>
    )
  }
  
  const Course = ({course}) => {
    return (
      <>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </>
    )
  }

  export default Course;