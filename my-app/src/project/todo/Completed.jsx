import React from "react";
import SingleTodo from "./SingleTodo";

const Completed = ({ data, deleteTodo }) => {
  return (
    <>
      <h1>Completed Todos</h1>
      <ul>
        {data
          ?.filter((element) => element.done)
          ?.map((element) => (
            <SingleTodo
              todo={element}
              key={element.id}
              deleteTodo={deleteTodo}
            />
          ))}
      </ul>
    </>
  );
};

export default Completed;

// let num = [1, 2, 3, 4];

// let to = [
//   { id: 1, title: "", done: false },
//   { id: 1, title: "", done: false },
//   { id: 1, title: "", done: false },
//   { id: 1, title: "", done: false },
// ];

// to.map((ele) => ele * 2);
