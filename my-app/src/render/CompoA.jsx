import React, { memo } from "react";
import CompoB from "./CompoB";
import Compoc from "./Compoc";

const CompoA = () => {
  console.log("Component - A");
  return (
    <div>
      CompoA
      <CompoB />
      <Compoc />
    </div>
  );
};

export default memo(CompoA);
