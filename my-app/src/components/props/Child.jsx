import React from "react";

const Child = ({ greet }) => {
  return (
    <div>
      <h1>Child</h1>
      {greet.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button>Child Button</button>
    </div>
  );
};

export default Child;
