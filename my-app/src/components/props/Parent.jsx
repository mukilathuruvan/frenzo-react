import React from "react";
import Child from "./Child";

const Parent = () => {
  const courses = ["python", "java", "plc", "aws"];
  return (
    <div>
      <h1>Parent</h1>
      <button>Parent Button</button>
      <Child greet={courses} />
    </div>
  );
};

export default Parent;
