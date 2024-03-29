import {
  increment,
  decrement,
  incrementByAmount,
  counterSlice,
} from "./counterSlice";

describe("counterSlice", () => {
  it("should handle increment", () => {
    const initialState = { value: 0 };
    const nextState = counterSlice.reducer(initialState, increment());
    expect(nextState.value).toEqual(1);
  });

  it("should handle decrement", () => {
    const initialState = { value: 1 };
    const nextState = counterSlice.reducer(initialState, decrement());
    expect(nextState.value).toEqual(0);
  });

  it("should handle incrementByAmount", () => {
    const initialState = { value: 0 };
    const nextState = counterSlice.reducer(initialState, incrementByAmount(5));
    expect(nextState.value).toEqual(5);
  });
});
