import React, { useEffect, useState } from "react";

const SideEffects = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component is mounting");
    return () => {
      console.log("unmounting phase");
    };
  }, [count]);

  return (
    <div>
      <h2>Side Effect -{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default SideEffects;
