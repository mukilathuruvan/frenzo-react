import React from "react";
import Child from "./Child";

const Parent = () => {
  const handler = () => {
    alert("button is clicked");
  };
  return (
    <div>
      <h1>Parent</h1>
      <button onClick={() => handler()}>Parent Button</button>
      <Child handleClick={handler} />
    </div>
  );
};

export default Parent;
