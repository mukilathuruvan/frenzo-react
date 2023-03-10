import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(10);
  console.log("parent");
  const person = useMemo(() => ({ name: "ragnar", age: 31 }), []);
  return (
    <div>
      Parent -{person.name}-{count}
      <br />
      <button onClick={() => setCount(count + 1)}>Click</button>
      <Child person={person} />
    </div>
  );
};

export default Parent;
