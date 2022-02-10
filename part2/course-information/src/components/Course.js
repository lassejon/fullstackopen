import React from "react"

const Header = (props) => {
    const name = props.props.course.name
    return (
      <h1>{name}</h1>
    )
  }
  
  const Part = (props) => {
    const part = props.part;
    return (
      <div>
        {part.name} {part.exercises}
      </div>
    )
  }
  
  const Content = (props) => {
    const parts = props.props.course.parts
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  
  const Total = (props) => {
    const parts = props.props.course.parts;
    return (
      <p><b>total of exercises {parts.reduce((result, current) => result + current.exercises, 0)}</b></p>
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

  export default Course;