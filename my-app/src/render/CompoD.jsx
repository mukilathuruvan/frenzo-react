import React from "react";
import CompoE from "./CompoE";

const CompoD = ({ name }) => {
  console.log("Component - D");
  return (
    <div>
      CompoD
      <CompoE name={name} />
    </div>
  );
};

export default CompoD;
