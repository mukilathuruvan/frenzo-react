import React from "react";
import CompoD from "./CompoD";

const Compoc = ({ name }) => {
  console.log("Component - C");
  return (
    <div>
      Compoc
      <CompoD name={name} />
    </div>
  );
};

export default Compoc;
