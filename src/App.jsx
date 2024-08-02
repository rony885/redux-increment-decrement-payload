
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import About from './app/pages/About'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice'
import { useState } from 'react'

function App() {
  const count = useSelector((state)=>state.counter.value)
  // console.log(count)
  const dispatch = useDispatch()
  const [number, setNumber] = useState("0")
  // console.log(number)


  const handleIncrement = ()=>{
    dispatch(increment());
  }
  
  const handleDecrement = ()=>{
    dispatch(decrement());
  }
  const handleAddAmoutPayload = ()=>{
    dispatch(incrementByAmount(parseInt(number)));
  }


  return (
    <>
    <h1>{count}</h1>
    <About></About>

    <input type="text" onChange={(e)=>setNumber(e.target.value)} />
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleAddAmoutPayload}>Add Amount with Payload</button>
    </>
  )
}

export default App
