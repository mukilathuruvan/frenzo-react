import React from "react";

const Child = (props) => {
  console.log(props.children);
  return <div>Child - {props.children}</div>;
};

export default Child;

export const Name = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
    </>
  );
};
