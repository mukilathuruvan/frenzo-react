import React from "react";

const Child = (props) => {
  console.log(props.children);
  return <div>Child - {props.children}</div>;
};

export default Child;
