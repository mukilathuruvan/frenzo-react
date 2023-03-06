import React, { useEffect, useState } from "react";

const SideEffects = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count is ", count);
  }, [count]);

  return (
    <div>
      <h2>Side Effect -{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default SideEffects;
