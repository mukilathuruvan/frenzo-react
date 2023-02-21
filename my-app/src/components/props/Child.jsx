import React from "react";

const Child = ({ handleClick }) => {
  return (
    <div>
      <h1>Child</h1>
      <button onClick={handleClick}>Child Button</button>
    </div>
  );
};

export default Child;
