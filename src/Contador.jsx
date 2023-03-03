import React, { useContext } from 'react'
import { CountContext } from './context/CountContext'
export const CounterApp = () => {

  const { count, setCount, value } = useContext(CountContext)

  const increment = (e) => {
    setCount(count + 1)

  }

  const decrement = (e) => {
    if (count < 1) return
    setCount(count - 1)

  }

  const reset = () => setCount(value)

  return (
    <div className='d-flex flex-column align-content-center'>
      <h1 className='text-center'>Contador</h1>
      <h2 className='text-center'> {count} </h2>

      <div className='text-center d-flex justify-content-center'>
        <button className='btn btn-primary' onClick={increment}> +1 </button>
        <button className='btn btn-outline-info' aria-label='btn-reset' onClick={reset}> Reset </button>
        <button className='btn btn-primary' onClick={decrement}> -1 </button>
      </div>

    </div>
  )
}