import React, { useReducer, useState } from "react";

let initial = { fname: "", lname: "", age: 0, course: "", doj: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "fname": {
      return { ...state, fname: action.payload };
    }
    case "lname": {
      return { ...state, lname: action.payload };
    }
    case "age": {
      return { ...state, age: action.payload };
    }
    case "course": {
      return { ...state, course: action.payload };
    }
    case "doj": {
      return { ...state, doj: action.payload };
    }
    default: {
      return state;
    }
  }
};

const Form = () => {
  const [person, dispatch] = useReducer(reducer, initial);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(person);
      }}>
      <input
        type="text"
        name="fname"
        onChange={(e) => dispatch({ type: "fname", payload: e.target.value })}
        value={person.fname}
      />
      <input
        name="lname"
        type="text"
        onChange={(e) => dispatch({ type: "lname", payload: e.target.value })}
        value={person.lname}
      />
      <input
        name="age"
        type="number"
        onChange={(e) => dispatch({ type: "age", payload: e.target.value })}
        value={person.age}
      />
      <input
        name="course"
        type="text"
        onChange={(e) => dispatch({ type: "course", payload: e.target.value })}
        value={person.course}
      />
      <input
        name="doj"
        type="date"
        onChange={(e) => dispatch({ type: "doj", payload: e.target.value })}
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
