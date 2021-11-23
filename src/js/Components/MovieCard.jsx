import React from "react";
import "./MovieCard.css";
import { removeMovie } from "../actions/index";
import { connect } from "react-redux";
import NewModal from "./NewModal";
import { Link } from "react-router-dom";

const mapDispatchToProps = {
  removeMovie: removeMovie
};

const MovieCard = props => {
  let starstab = [
    "fa fa-star",
    "fa fa-star",
    "fa fa-star",
    "fa fa-star",
    "fa fa-star"
  ];
  return (
    <div>
      <div className="MovieCard">
        <img src={props.Movie.img} alt="inception" className="MoviePic" />
        <div className="MovieRating">
          {starstab.map((el, j) =>
            j < props.Movie.rating ? (
              <span className={el + " checked"} key={j}></span>
            ) : (
              <span className={el} key={j}></span>
            )
          )}
        </div>
        <h4 className="MovieTitle">{props.Movie.title}</h4>
        <div className="cardButtons">
          <button
            className="btn btn-danger"
            onClick={() => props.removeMovie({ id: props.Movie.id })}
          >
            Delete
          </button>
          <NewModal buttonLabel="Edit" movie={props.Movie} />
          <Link to={`/Descriptions/${props.Movie.id}`}>
            <button className="btn btn-light">Trailer</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default connect(null, mapDispatchToProps)(MovieCard);
