import React from "react";
import Button from "./Button";
const MyInput = () => {
  const getValue = () => {
    console.log(document.getElementById("name-input").value);
  };

  return (
    <div>
      <input type="text" id="name-input" />
      <Button variant={"secondary"} size={"lg"} rounded handler={getValue}>
        Click
      </Button>
    </div>
  );
};

export default MyInput;
