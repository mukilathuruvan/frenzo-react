import React, { memo } from "react";

const CompoB = () => {
  console.log("Component - B");
  return <div>CompoB</div>;
};

export default memo(CompoB);
