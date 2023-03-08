import { useState } from "react";
import "./App.css";
import CompoA from "./render/CompoA";
function App() {
  const [name, setName] = useState("manfree");
  return (
    <div className="App">
      <CompoA name={name} />
      <h2>{name} from app</h2>
      <button onClick={() => setName("frenzo")}>Change name</button>
    </div>
  );
}

export default App;
