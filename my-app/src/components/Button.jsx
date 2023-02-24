import React from "react";
import "../style/button.css";
const Button = ({
  children,
  rounded,
  variant,
  size,
  backgroundColor,
  handler,
}) => {
  return (
    <button
      className={` button ${variant ? variant : ""} ${rounded ? "rounded" : ""} 
      ${size ? size : null}
      `}
      style={{ backgroundColor }}
      onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
