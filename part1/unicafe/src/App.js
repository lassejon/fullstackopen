import React, { useState } from 'react'

const Button = ( {text, onClick} ) => (<button onClick={onClick}>{text}</button>)

const StatisticLine = ( { text, stat } ) => {
  return (
    <tr><td>{text}</td><td>{stat}</td></tr>
  )
}

const Statistics= ( { text, stat } ) => {
  if (0 === stat.good + stat.bad + stat.neutral) {
    return (<div>No feedback given</div>)
  }
  else {
    return (
      <table>
        <tbody>
          <StatisticLine text={text.goodStr} stat={stat.good} />
          <StatisticLine text={text.neutralStr} stat={stat.neutral} />
          <StatisticLine text={text.badStr} stat={stat.bad} />
          <StatisticLine text={"average"} stat={stat.average}/>
          <StatisticLine text={"positive"} stat={stat.positivePercentage}/>
        </tbody>  
      </table>
    )
  }
}

const Average = ( { average } ) => (<div>average {average}</div>);

const Positive = ( { positive } ) => (<div>positive {positive}</div>);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positivePercentage, setPositivePercentage] = useState(0)

  const voteEvent = (vote) => () => {
    const score = { good: 1, neutral: 0, bad: -1}

    let setValue;

    switch (vote) {
      case "good":
        setValue = setGood(good + 1);
        break;
      case "neutral":
        setValue = setNeutral(neutral + 1);
        break;
      case "bad":
        setValue = setBad(bad + 1);
        break;
      default:
        break;
    }

    let total = good+ neutral + bad;
    let totalAmount = total !== 0 ? total : 1;
    let averageCalculated = (score.good * good + bad * score.bad) / totalAmount;

    return setValue, setAverage(averageCalculated), setPositivePercentage(good / totalAmount * 100);
  }

  const goodStr = "good";
  const neutralStr = "neutral";
  const badStr = "bad";

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={voteEvent(goodStr)} text={goodStr} />
      <Button onClick={voteEvent(neutralStr)} text={neutralStr}/>
      <Button onClick={voteEvent(badStr)} text={badStr}/>
      <h1>statistics</h1>
      <Statistics text={ {goodStr: goodStr, neutralStr: neutralStr, badStr: badStr} }
                  stat={ {good: good, neutral: neutral, bad: bad, average: average, 
                          positivePercentage: positivePercentage} } />
    </>
  )
}

export default App