import React from 'react'
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { decrement, increment } from '../../slices/counter/counterSlice';
import Box from '../Box';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <Box title='Counter'>
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
    </Box>
  )
}

export default Counter;