import React from "react";

const SingleTodo = ({ todo, deleteTodo }) => {
  return (
    <li className="flex">
      <input type="checkbox" checked={todo.done} />
      <h3>{todo.title}</h3>
      <div>
        <button>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
};

export default SingleTodo;
