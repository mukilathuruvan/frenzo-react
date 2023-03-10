import React, { useState } from "react";
import uuid from "react-uuid";
import { useAuth } from "../../context/ExpenceContext";
const initial = { id: "", title: "", amount: 0, type: "income" };
const Form = () => {
  const [single, setSingle] = useState(initial);
  const { addToHistory } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(single);
    addToHistory({ ...single, id: uuid() });
    setSingle(initial);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        value={single.title}
        onChange={(e) => setSingle({ ...single, title: e.target.value })}
      />
      <input
        type="number"
        value={single.amount}
        onChange={(e) =>
          setSingle({ ...single, amount: Number(e.target.value) })
        }
      />
      <select
        value={single.type}
        onChange={(e) => {
          setSingle({ ...single, type: e.target.value });
        }}>
        {/* <option value="">Select any category</option> */}
        <option value="expence">Expence</option>
        <option value="income">Income</option>
      </select>
      <input type="submit" value={"Add"} />
    </form>
  );
};

export default Form;
