import React from 'react';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter';
  const age = 10;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Hello name="Leif" age={26 + age} />
    
    </>
  )
}

export default App;