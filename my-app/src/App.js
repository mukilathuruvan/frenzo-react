import "./App.css";
import Button from "./components/Button";

import { data } from "./components/data";

function App() {
  return (
    <div className="App">
      {data.map((text) => (
        <Button key={text.id} rounded variant={text.varaint} size={text.size}>
          {text.text}
        </Button>
      ))}
    </div>
  );
}

export default App;
