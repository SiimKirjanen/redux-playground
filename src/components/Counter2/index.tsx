import React from "react";
import { useAppDispatch } from "../../hooks";
import { increment, decrement } from "../../reducers/counter";
import Box from "../Box";
import { useAppSelector } from "../../hooks";

const Counter2 = () => {
  const count = useAppSelector((state) => state.counter2.value);
  const dispatch = useAppDispatch();

  return (
    <Box title="Counter2">
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

export default Counter2;
