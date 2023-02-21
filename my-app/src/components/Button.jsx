import React from "react";
import "../style/button.css";
const Button = ({ children }) => {
  return <button className={`${children.toLowerCase()}`}>{children}</button>;
};

export default Button;


