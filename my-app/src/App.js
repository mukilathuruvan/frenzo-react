import { useState } from "react";
import "./App.css";
import Input from "./Hooks/Input";
function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;
