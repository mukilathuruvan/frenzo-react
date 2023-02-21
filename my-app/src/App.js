import logo from "./logo.svg";
import "./App.css";
import Header, { Footer, MainContent } from "./components/Header";
import Courses,{PersonInfo} from "./components/Courses";
function App() {
  return (
    <div className="App">
      <Header/>
      <Header />
      <Header />
      <Courses />
      <PersonInfo/>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
