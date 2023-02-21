import logo from "./logo.svg";
import "./App.css";
import Header, { Footer, MainContent } from "./components/Header";
import Courses, { PersonInfo } from "./components/Courses";
import Child from "./components/Child";
function App() {
  return (
    <div className="App">
      <Child>
        <h2>nested Component</h2>
      </Child>
    </div>
  );
}

export default App;
