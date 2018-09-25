import React, { Component } from "react";
import "./css/main.css";
import { Jumbotron } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1 className="display-3">Hello, world!!</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
