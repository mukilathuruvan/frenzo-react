import React, { useState } from "react";

let initial = { id: 1, title: "", done: false };
const Form = ({ setTodos, todos }) => {
  const [todo, setTodo] = useState(initial);
  const handleAdd = () => {
    setTodo(initial);
    setTodos([...todos, todo]);
  };
  return (
    <div>
      <input
        type="text"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Form;
