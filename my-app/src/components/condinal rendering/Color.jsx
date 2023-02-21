import React from "react";

const Color = ({ name }) => {
  if (name) {
    return <h1>Color - {name}</h1>;
  } else {
    return <h1>Color not specified</h1>;
  }
};

export default Color;
