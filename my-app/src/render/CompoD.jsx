import React, { memo } from "react";
import CompoE from "./CompoE";

const CompoD = () => {
  console.log("Component - D");
  return (
    <div>
      CompoD
      <CompoE />
    </div>
  );
};

export default memo(CompoD);
