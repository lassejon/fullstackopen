import React, { Component, useState } from 'react'

const Display = ( {value} ) => <div>{value}</div>;

const Button = ({text, onClick}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () => {
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button onClick={setToValue(1000)} text="thousand" />
      <Button onClick={setToValue(0)} text="reset" />
      <Button onClick={setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default App