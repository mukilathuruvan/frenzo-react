import React, { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef(10);
  return (
    <div>
      <h2>{inputRef.current}</h2>
      <button
        onClick={() => {
          console.log(inputRef.current);
          inputRef.current++;
        }}>
        Increment
      </button>
    </div>
  );
};

export default Input;
