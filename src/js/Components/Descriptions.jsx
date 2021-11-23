import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Descriptions.css";

const mapStateToProps = state => ({
  movies: state.movies
});
const Descriptions = props => {
  const { movie } = props.match.params;

  const [movieToShow] = props.movies.filter(el => {
    return el.id === Number(movie);
  });
  console.log(movieToShow);
  return (
    <div className="movieDescription">
      <h1>{movieToShow.title}</h1>
      <iframe
        title="trailer"
        width="1000"
        height="480"
        src={movieToShow.trailer}
        frameBorder="0"
        allowFullScreen
      />
      <Link to="/">
        <button className="btn btn-danger">Back</button>
      </Link>
    </div>
  );
};

export default connect(mapStateToProps)(Descriptions);
