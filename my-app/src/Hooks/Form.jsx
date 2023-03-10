import React, { useState } from "react";

let initial = { fname: "", lname: "", age: 0, course: "", doj: "" };

const Form = () => {
  const [person, setPerson] = useState(initial);

  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    console.log(key, value);
    setPerson({ ...person, [key]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(person);
      }}>
      <input
        type="text"
        name="fname"
        onChange={handleChange}
        value={person.fname}
      />
      <input
        name="lname"
        type="text"
        onChange={handleChange}
        value={person.lname}
      />
      <input
        name="age"
        type="number"
        onChange={handleChange}
        value={person.age}
      />
      <input
        name="course"
        type="text"
        onChange={handleChange}
        value={person.course}
      />
      <input
        name="doj"
        type="date"
        onChange={handleChange}
        value={person.doj}
      />
      <input type="submit" />
      {/* <label htmlFor="fname">
        <input type="radio" id="fname" />
        python
      </label>
      <label htmlFor="">
        <input type="radio" />
        java
      </label>
      <input type="radio" />
      python */}
    </form>
  );
};

export default Form;
