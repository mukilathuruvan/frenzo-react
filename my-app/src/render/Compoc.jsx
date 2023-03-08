import React, { memo } from "react";
import CompoD from "./CompoD";

const Compoc = () => {
  console.log("Component - C");
  return (
    <div>
      Compoc
      <CompoD />
    </div>
  );
};

export default memo(Compoc);
