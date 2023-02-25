import React, { useState } from "react";
import Button from "../components/Button";

let initialState = {
  name: "ragnar",
  course: "plc",
  isPresent: false,
};
const Person = () => {
  const [person, setPerson] = useState(initialState);
  console.log("component is rendering");
  const handlePresent = () => {
    setPerson({ ...person, isPresent: true });
  };
  const handleAbsent = () => {
    setPerson({ ...person, isPresent: false });
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.course}</h3>
      <h3>{person.isPresent ? "present" : "absent"}</h3>
      <Button rounded variant={"primary"} size="lg" handler={handlePresent}>
        Present
      </Button>
      <Button rounded variant={"danger"} size="lg" handler={handleAbsent}>
        Absent
      </Button>
    </div>
  );
};

export default Person;
