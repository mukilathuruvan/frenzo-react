import { useContext, useState } from "react";
import "./App.css";
import { context } from "./context/UserContext";
import CompoA from "./render/CompoA";
function App() {
  const name = useContext(context);
  return (
    <div className="App">
      <CompoA />
      <h2>{name} from app</h2>
    </div>
  );
}

export default App;
