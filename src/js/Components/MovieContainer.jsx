import React, { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Descriptions from "./Descriptions";

export class MovieContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchItem: "",
      searchRating: 0
    };
  }

  getRating = searchRating => {
    this.setState({
      searchRating: searchRating
    });
  };

  getSearch = searchItem => {
    this.setState({
      searchItem: searchItem
    });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar getRating={this.getRating} getSearch={this.getSearch} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <MovieList
                  searchItem={this.state.searchItem}
                  searchRating={this.state.searchRating}
                />
              )}
            />
            <Route exact path="/Descriptions/:movie" component={Descriptions} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default MovieContainer;
