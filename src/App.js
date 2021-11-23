import React, { Component } from "react";
import "./App.css";
import MovieContainer from "./js/Components/MovieContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Hoc from "./js/Components/Hoc";

const MovieContainerHoc = Hoc(MovieContainer);
class App extends Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 2000);
  }
  render() {
    return (
      <div className="App">
        <MovieContainerHoc isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;
