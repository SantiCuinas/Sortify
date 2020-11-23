import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function Main(props) {
    console.log(props.match.params.access_token);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Sortify</h1>
        <Button variant="outline-primary">Sort it!</Button>{" "}
      </header>
    </div>
  );
}

export default Main;
