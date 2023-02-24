import React, { useState } from "react";

const Mutation = () => {
  const [numbers, setNumbers] = useState(["one", "two"]);

  const handleAdd = () => {
    setNumbers([...numbers, "three"]);
  };
  return (
    <div>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Mutation;
