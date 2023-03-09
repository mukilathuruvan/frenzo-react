import React, { memo } from "react";

const Child = ({ handler }) => {
  console.log("child");
  return (
    <div>
      Child
      <br />
      <button onClick={handler}>Button-Child</button>
    </div>
  );
};

export default memo(Child);
