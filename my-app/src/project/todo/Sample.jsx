import React, { useEffect, useState } from "react";
import "./todo.css";
const initial = [
  { id: 201, title: "go for trip", done: false },
  { id: 202, title: "visit office", done: true },
  { id: 203, title: "drink water", done: true },
  { id: 204, title: "learn code", done: true },
  { id: 205, title: "go for walk", done: false },
  { id: 206, title: "read a book", done: true },
];

const singleInitial = { id: 211, title: "", done: false };
const Sample = () => {
  const [list, setList] = useState(initial);
  const [single, setSingle] = useState(singleInitial);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    if (edit) {
      setSingle(edit);
    }
  }, [edit]);

  const handleAdd = () => {
    if (edit) {
      const result = list.map((todo) =>
        todo.id === edit.id ? { ...single } : todo
      );
      setList(result);
      setEdit(null);
      setSingle(singleInitial);
    } else {
      setList([...list, single]);
      setSingle(singleInitial);
    }
  };

  const handleDelete = (id) => {
    let result = list?.filter((todo) => todo.id !== id);
    setList(result);
  };
  const handleEdit = (item) => {
    setEdit(item);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={single.title}
          onChange={(e) => setSingle({ ...single, title: e.target.value })}
        />
        <button onClick={handleAdd}>{edit ? "update" : "add"}</button>
      </div>
      <ul>
        {list?.map((todo) => (
          <li key={todo.id} className="flex">
            <input type="checkbox" checked={todo.done} onChange={() => {}} />
            <h3>{todo.title}</h3>
            <div>
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sample;
