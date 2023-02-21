import React from "react";

const Courses = () => {
  let courses = ["java", "pytho", "web", "plc"];
  return (
    <ul>
      {courses.map((course, index) => (
        <li key={index}>{course}</li>
      ))}
    </ul>
  );
};

export default Courses;

export const PersonInfo = () => {
  const person = { name: "ragnar", age: "10", course: "plc", role: "king" };
  return (
    <>
      <h3>{`Name - ${person.name}`}</h3>
      <h3>{`Course - ${person.course}`}</h3>
      <h3>{`Role - ${person.role}`}</h3>
      <h3>{`age - ${person.age}`}</h3>
      {/* {person} */}
    </>
  );
};
