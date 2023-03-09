import React, { useContext } from "react";
import { context } from "../context/UserContext";

const CompoE = () => {
  const name = useContext(context);
  console.log("Component - E ");

  return (
    <div>
      <h2>CompoE - {name}</h2>
    </div>
  );
};

export default CompoE;
