import React, { useState } from "react";

const Counter = () => {
  let [value, setValue] = useState(10);

  const increament = () => {
    setValue(value + 1);
  };
  const decreament = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <h1>value - {value}</h1>
      <button onClick={decreament}>Decreament</button>
      <button onClick={increament}>Increament</button>
    </div>
  );
};

export default Counter;
