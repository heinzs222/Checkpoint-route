import React, { Component } from "react";
import MovieCard from "./MovieCard";
import NewModal from "./NewModal";
import { connect } from "react-redux";
import "./MovieList.css";

const mapStateToProps = state => {
  return { movies: state.movies };
};

export class MovieList extends Component {
  render() {
    return (
      <div className="MovieList">
        {this.props.movies.map((el, i) =>
          el.title.substring(0, this.props.searchItem.length).toUpperCase() ===
            this.props.searchItem.toUpperCase() &&
          el.rating >= this.props.searchRating ? (
            <MovieCard Movie={el} key={i} />
          ) : (
            <></>
          )
        )}
        <div className="addMovie">
          <NewModal buttonLabel="Add" />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(MovieList);
