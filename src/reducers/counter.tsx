import { createAction, createReducer } from '@reduxjs/toolkit';

interface CounterState {
  value: number
};

export const increment = createAction('counter2/increment');
export const decrement = createAction('counter2/decrement');
export const incrementByAmount = createAction<number>('counter2/incrementByAmount');

const initialState: CounterState = { value: 5 };

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++
    })
    .addCase(decrement, (state, action) => {
      state.value--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
});