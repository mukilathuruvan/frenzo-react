import React, { useState } from "react";

const MyInput = () => {
  const [person, setPerson] = useState({ name: "", age: 0, course: "" });
  const handleChange = (e) =>
    setPerson({ ...person, [e.target.name]: e.target.value });
  return (
    <div>
      <label htmlFor="">
        name{" "}
        <input
          type="text"
          name="name"
          value={person.name}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label htmlFor="">
        age{" "}
        <input
          type="number"
          name="age"
          value={person.age}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label htmlFor="">
        course{" "}
        <input
          type="text"
          name="course"
          value={person.course}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <h1>{` name:${person.name}  age:${person.age}  course:${person.course}`}</h1>
    </div>
  );
};

export default MyInput;
