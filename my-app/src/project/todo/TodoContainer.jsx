import React, { useState } from "react";
import Form from "./Form";
import UnCompleted from "./UnCompleted";
import Completed from "./Completed";
import "./todo.css";
const initial = [
  { id: 201, title: "go for trip", done: false },
  { id: 202, title: "visit office", done: true },
  { id: 203, title: "drink water", done: true },
  { id: 204, title: "learn code", done: true },
  { id: 205, title: "go for walk", done: false },
  { id: 206, title: "read a book", done: true },
];
const TodoContainer = () => {
  const [todos, setTodos] = useState(initial);
  const deleteTodo = (id) => {
    let result = todos?.filter((todo) => todo.id !== id);
    setTodos(result);
  };
  return (
    <div>
      <Form setTodos={setTodos} todos={todos} />
      <UnCompleted data={todos} deleteTodo={deleteTodo} />
      <Completed data={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoContainer;
