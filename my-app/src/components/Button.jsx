import React from "react";
import "../style/button.css";
const Button = ({ children, rounded, variant, size }) => {
  return (
    <button
      className={` button ${variant ? variant : ""} ${rounded ? "rounded" : ""} 
      ${size ? size : ""}
      `}>
      {children}
    </button>
  );
};

export default Button;
