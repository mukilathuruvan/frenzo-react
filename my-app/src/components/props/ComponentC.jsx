import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

const ComponentC = () => {
  const greet = () => {
    alert("button is clicked");
  };
  return (
    <>
      <ComponentA handler={greet} />
      <ComponentB handler={greet} />
    </>
  );
};

export default ComponentC;
