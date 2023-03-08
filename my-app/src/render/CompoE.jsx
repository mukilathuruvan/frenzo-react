import React, { useContext } from "react";
import { context } from "../context/UserContext";

const CompoE = () => {
  const name = useContext(context);
  console.log("Component - E ");

  return <div>CompoE - {name}</div>;
};

export default CompoE;
