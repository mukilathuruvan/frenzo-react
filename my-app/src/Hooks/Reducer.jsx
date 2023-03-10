import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return state + action.payload;
    }
    case "decrement": {
      return state - action.payload;
    }
    default:
      return state;
  }
};
const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, 10);
  return (
    <div>
      <h1>Reducer -{count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        Increment-5
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Decrement-5
      </button>
    </div>
  );
};

export default Reducer;
