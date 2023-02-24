import React from "react";
import Child from "./Child";

const Parent = () => {
  const courses = ["python", "java", "plc", "aws"];
  return (
    <div>
      <Child greet={courses} />
    </div>
  );
};

export default Parent;
