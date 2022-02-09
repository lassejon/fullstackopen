import React, { useState } from 'react'

const Button = ( {text, onClick} ) => (<button onClick={onClick}>{text}</button>)

const StatisticLine = ( { text, stat } ) => (<div>{text} {stat}</div>)

const Statistics= ( { text, stat } ) => (
  <div>
    <StatisticLine text={text.goodStr} stat={stat.good} />
    <StatisticLine text={text.neutralStr} stat={stat.neutral} />
    <StatisticLine text={text.badStr} stat={stat.bad} />
    <StatisticLine text={"average"} stat={stat.average}/>
    <StatisticLine text={"positive"} stat={stat.positivePercentage}/>
  </div>  
)

const Average = ( { average } ) => (<div>average {average}</div>);

const Positive = ( { positive } ) => (<div>positive {positive}</div>);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positivePercentage, setPositivePercentage] = useState(0)

  const total = good + neutral + bad;
  const totalAmount = total !== 0 ? total : 1;

  const voteEvent = (vote) => () => {
    const score = { good: 1, neutral: 0, bad: -1}
    let averageCalculated = (score.good * good + bad * score.bad) / totalAmount
    let setVote;
    let goodUpdated = good;

    switch (vote) {
      case "good":
        setVote = setGood(good + 1);
        goodUpdated = setVote;
        break;
      case "neutral": 
        setVote = setNeutral(neutral + 1);
        break;
      case "bad":
        setVote = setBad(bad + 1);
        break;
      default:
        break;
    }

    totalAmount =+ 1;

    return setVote, setAverage(averageCalculated), setPositivePercentage(goodUpdated / totalAmount * 100);
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
      <Statistics text={ {goodStr: goodStr, neutralStr: neutralStr, badStr: badStr} }
                  stat={ {good: good, neutral: neutral, bad: bad, average: average, 
                          positivePercentage: positivePercentage} } />
    </div>
  )
}

export default App