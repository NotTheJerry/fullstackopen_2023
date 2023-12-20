import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({ 0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0 });
  const [indexMayor, setIndexMayor] = useState(0)
  const [valorMayor, setValorMayor] = useState(0)

  const random = () => {
    const num_random = Math.floor(Math.random() * 8)
    return (
      setSelected(num_random)
    )
  }

  const votar= () => {
    setPoints({ ...points, [selected]: points[selected]+1 })
    
    const valores = Object.values({ ...points, [selected]: points[selected] + 1 })

    for(let i=0; i < valores.length; i++){
      if(valores[i] > valorMayor){
        setIndexMayor(i)
        setValorMayor(valores[i])
      }
    }

  }



  return (
    <div>
      <h1>Anecdote with most of the day</h1>
      {anecdotes[selected]} <br/>
      <p>has { points[selected] } points</p> <br/>
      <button onClick={votar}>vote</button>
      <button onClick={random}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[indexMayor]}
    </div>
  )
}

export default App