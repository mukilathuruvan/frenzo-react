import "./App.css";
import Child, { Name } from "./components/Child";
function App() {
  return (
    <div className="App">
      <Name name="manfree" />
      <Name name="frenzo" />
      <Name name="oracle" />
    </div>
  );
}

export default App;
