import React, { memo } from "react";

const Child = ({ person }) => {
  console.log("child");
  return (
    <div>
      Child
      <br />
      <h3>from child - {person.name}</h3>
    </div>
  );
};

export default memo(Child);
