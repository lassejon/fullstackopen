import React, { useState } from 'react'

const Button = ( {text, onClick} ) => (<button onClick={onClick}>{text}</button>)

const Statistics = ( { text, stat } ) => (<div>{text} {stat}</div>)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const voteEvent = (vote) => () => {
    switch (vote) {
      case "good":
        return setGood(good + 1);
        break;
      case "neutral":
        return setNeutral(neutral + 1);
        break;
      case "bad":
        return setBad(bad + 1);
        break;
      default:
        break;
    }
  }

  const goodStr = "good";
  const neutralStr = "neutral";
  const badStr = "bad";

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={voteEvent(goodStr)} text={goodStr} />
      <Button onClick={voteEvent(neutralStr)} text={neutralStr}/>
      <Button onClick={voteEvent(badStr)} text={badStr}/>
      <h1>statistics</h1>
      <Statistics text={goodStr} stat={good} />
      <Statistics text={neutralStr} stat={neutral} />
      <Statistics text={badStr} stat={bad} />
    </div>
  )
}

export default App