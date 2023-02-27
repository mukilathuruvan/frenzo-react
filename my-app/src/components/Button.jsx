import React from "react";
import "../style/button.css";
const Button = ({
  children,
  rounded,
  variant,
  size,
  backgroundColor,
  handler,
  disabled,
}) => {
  return (
    <button
      className={` button ${variant ? variant : ""} ${rounded ? "rounded" : ""} 
      ${size ? size : ""}
      `}
      style={{ backgroundColor }}
      onClick={handler}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
