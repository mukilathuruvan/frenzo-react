import React from "react";

const Todo = ({ status }) => {
    console.log(status)
  return <h1 className={`${status ? "success" : "pending"}`}>Single Todo</h1>;
};

export default Todo;
