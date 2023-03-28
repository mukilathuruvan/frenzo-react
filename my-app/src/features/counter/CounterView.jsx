import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inc } from "./CounterSlice";
const CounterView = () => {
  const { value } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>CounterView - {value}</h1>
      <button onClick={() => dispatch(inc(10))}>Increment</button>
    </>
  );
};

export default CounterView;