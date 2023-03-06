import { useState } from "react";
import "./App.css";
import SideEffects from "./Hooks/SideEffects";
function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Click</button>
      {show && <SideEffects />}
    </div>
  );
}

export default App;
