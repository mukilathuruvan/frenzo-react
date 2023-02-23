import "./App.css";
import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      <Button variant={"primary"} rounded size={"sm"}>
        Primary
      </Button>
      <Button variant={"primary"} rounded size={"md"}>
        Primary
      </Button>
      <Button variant={"primary"} rounded size={"lg"}>
        Primary
      </Button>
      <Button variant={"secondary"} rounded size={"sm"}>
        secondary
      </Button>
      <Button variant={"secondary"} rounded size={"md"}>
        secondary
      </Button>
      <Button variant={"secondary"} rounded size={"lg"}>
        secondary
      </Button>
      <Button variant={"danger"} rounded size={"sm"}>
        danger
      </Button>
      <Button variant={"danger"} rounded size={"md"}>
        danger
      </Button>
      <Button variant={"danger"} rounded size={"lg"}>
        danger
      </Button>
    </div>
  );
}

export default App;
