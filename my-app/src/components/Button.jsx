import React from "react";
import "../style/button.css";

const buttonStyle = {
  color: "red",
};

const Button = ({ children }) => {
  return <button style={buttonStyle}>{children}</button>;
};

export default Button;
