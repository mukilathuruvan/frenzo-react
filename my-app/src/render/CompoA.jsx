import React from "react";
import CompoB from "./CompoB";
import Compoc from "./Compoc";

const CompoA = ({ name }) => {
  console.log("Component - A");
  return (
    <div>
      CompoA
      <CompoB />
      <Compoc name={name} />
    </div>
  );
};

export default CompoA;
