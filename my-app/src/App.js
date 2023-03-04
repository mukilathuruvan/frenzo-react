import { useState } from "react";
import "./App.css";
import Picture from "./Hooks/Picture";
import Completed from "./project/todo/Completed";
import Form from "./project/todo/Form";
import UnCompleted from "./project/todo/UnCompleted";

const initial = [
  { id: 201, title: "go for trip", done: false },
  { id: 202, title: "visit office", done: true },
  { id: 203, title: "drink water", done: true },
  { id: 204, title: "learn code", done: true },
  { id: 205, title: "go for walk", done: false },
  { id: 206, title: "read a book", done: true },
];

function App() {
  const [todos, setTodos] = useState(initial);

  const deleteTodo = (id) => {
    let result = todos?.filter((todo) => todo.id !== id);
    setTodos(result);
  };

  return (
    <div className="App">
      <Form setTodos={setTodos} todos={todos} />
      <UnCompleted data={todos} deleteTodo={deleteTodo} />
      <Completed data={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
