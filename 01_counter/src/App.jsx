import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter]=useState(0)

  const incrementValue=()=>{
    setCounter(counter+1)
  }
  const decrementValue=()=>{
    if(counter<1){
      setCounter(0)
    }
    else{
    setCounter(counter-1)
    }
  }
  

  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={incrementValue}>Increment </button>
      <button onClick={decrementValue}>Decrement </button>
    </>
  )
}

export default App
