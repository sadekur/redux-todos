import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/todosAction'

export default function Todos() {
    const count = useSelector(state => state.count) // count(0)
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    const handleDecrement = () => {
        dispatch(decrementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }
  return (
    <div>
      <h2>Counter App</h2>
      <h3> Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

// 1. state - count : 0
// 2. actions - increment, decrement, reset
// 3. reducers - increment -> count + 1, decrement -> count - 1, reset -> count = 0,
// 4. store
// 5. providing store in react
// 6. connect/ use store
