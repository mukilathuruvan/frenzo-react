import React from "react";
import SingleTodo from "./SingleTodo";

const UnCompleted = ({ data, deleteTodo }) => {
  return (
    <>
      <h1>Pending Todo</h1>
      <ul>
        {data
          ?.filter((element) => !element.done)
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

export default UnCompleted;
