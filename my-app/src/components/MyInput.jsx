import React, { useState } from "react";
import Button from "./Button";
const MyInput = () => {
  const [name, setName] = useState("manfree");
  const handleChange = (e) => setName(e.target.value);
  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <Button
        variant={"secondary"}
        size={"lg"}
        rounded
        handler={() => console.log(name)}>
        Click
      </Button>
      <h3>{name}</h3>
    </div>
  );
};

export default MyInput;
