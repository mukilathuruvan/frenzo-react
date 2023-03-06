import React, { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" placeholder="name" ref={inputRef} />
      <input type="text" placeholder="age" />
      <input type="text" placeholder="course" />
    </div>
  );
};

export default Input;
