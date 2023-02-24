import React from "react";
import "../style/button.css";
const Button = ({ children, rounded, variant, size, backgroundColor }) => {
  return (
    <button
      className={` button ${variant ? variant : ""} ${rounded ? "rounded" : ""} 
      ${size ? size : null}
      `}
      style={{ backgroundColor }}>
      {children}
    </button>
  );
};

export default Button;
