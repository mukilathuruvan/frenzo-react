import "./App.css";
import Child, { Name } from "./components/Child";
import { Destruct } from "./components/Destruct";
function App() {
  return (
    <div className="App">
      <Destruct name="manfree" year={2010} />
    </div>
  );
}

export default App;
