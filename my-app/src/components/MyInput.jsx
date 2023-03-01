import React, { useState } from "react";

const MyInput = () => {
  const [person, setPerson] = useState({ name: "", age: 0, course: "" });
  return (
    <div>
      <label htmlFor="">
        name{" "}
        <input
          type="text"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
        />
      </label>
      <label htmlFor="">
        age{" "}
        <input
          type="number"
          value={person.age}
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
        />
      </label>
      <label htmlFor="">
        course{" "}
        <input
          type="text"
          value={person.course}
          onChange={(e) => setPerson({ ...person, course: e.target.value })}
        />
      </label>
      <h1>{` name:${person.name}  age:${person.age}  course:${person.course}`}</h1>
    </div>
  );
};

export default MyInput;
