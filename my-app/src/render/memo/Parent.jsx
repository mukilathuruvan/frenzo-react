import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  console.log("parent");
  const [count, setCount] = useState(10);
  const increment = useCallback(() => {
    setCount(count + 1);
  }, []);
  return (
    <div>
      Parent -{count}
      <Child handler={increment} />
    </div>
  );
};

export default Parent;
