import React from "react";
import uuid from "react-uuid";
const Universal = () => {
  return (
    <div>
      <button onClick={() => console.log(uuid())}>Click</button>
    </div>
  );
};

export default Universal;
