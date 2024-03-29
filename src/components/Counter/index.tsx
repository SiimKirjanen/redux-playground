import React from "react";
import { useAppDispatch } from "../../hooks";
import { decrement, increment } from "../../slices/counter/counterSlice";
import Box from "../Box";
import { useAppSelector } from "../../hooks";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Box title="Counter">
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
  );
};

export default Counter;
