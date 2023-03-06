import React, { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef(10);
  return (
    <div>
      <h2>{inputRef.current}</h2>
      <button
        onClick={() => {
          inputRef.current++;
        }}>
        Increment
      </button>
    </div>
  );
};

export default Input;
