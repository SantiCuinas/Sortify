import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Sortify</h1>
        <Button
          variant="outline-primary"
          onClick={() =>
            (window.location.href = process.env.REACT_APP_SCOPE_URL)
          }
        >
          Start
        </Button>{" "}
      </header>
    </div>
  );
}

export default App;
