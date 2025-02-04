import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {}
  return (
    <div>
      <h2>Counter App</h2>
      <h3> Count: 0</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
