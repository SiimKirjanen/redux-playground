import React from 'react'
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { increment, decrement } from '../../reducers/counter';
import Box from '../Box';

const Counter2 = () => {
  const count = useSelector((state: RootState) => state.counter2.value)
  const dispatch = useAppDispatch()

  return (
    <Box title='Counter2'>
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

export default Counter2;