import React from "react"
import { useState } from 'react'


const StadisticLine = ({text, value}) => {
  return (
    <>
      <tr>
        <th>{text}</th>
        <th>{value}</th>
      </tr>
    </>
  )
}

const Stadistics = ({good, neutral, bad }) => {
  const all = good + neutral + bad

  if(all){
    return (
      <>
        <table>
          <tbody>
            <StadisticLine text="good" value={good} />
            <StadisticLine text="neutral" value={neutral} />
            <StadisticLine text="bad" value={bad} />
            <StadisticLine text="all" value={all}/>
            <StadisticLine text="average" value={(good + bad * -1) / all}/>
            <StadisticLine text="positive" value={(good / all) * 100 + " %"}/>
          </tbody>
        </table>
      </>
    )  
  }  else {
    return (
      <>
        No feedfack given
      </>
    )
  }

}

const Button = ({text, eventHandler}) => {
  return (
    <>
      <button onClick={eventHandler}>{text}</button>
    </>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedfack</h1>
      <Button text="good" eventHandler={ () => setGood(good + 1) } />
      <Button text="neutral" eventHandler={ () => setNeutral(neutral + 1) } />
      <Button text="bad" eventHandler={ () => setBad(bad + 1) } />
      <h2>stadistics</h2>
      <Stadistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App