import React, { Component } from "react";
import "./Navbar.css";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      arrStar: [
        { img: "fa fa-star Navstar", colTest: false },
        { img: "fa fa-star Navstar", colTest: false },
        { img: "fa fa-star Navstar", colTest: false },
        { img: "fa fa-star Navstar", colTest: false },
        { img: "fa fa-star Navstar", colTest: false }
      ]
    };
  }

  handleRating = index => {
    let arr = this.state.arrStar;
    for (let i = 4; i >= index; i--) arr[i].colTest = true;
    for (let j = 0; j < index; j++) arr[j].colTest = false;
    this.props.getRating(5 - index);
    this.setState({
      arrStar: arr
    });
  };

  handleSearch = e => {
    this.props.getSearch(e.target.value);
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <input
              className="form-control search-area mr-sm-2"
              type="search"
              placeholder="Search your movie here"
              aria-label="Search"
              onChange={e => this.handleSearch(e)}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>

          <div className="MovieRating" id="NavbarRating">
            <h6>Minimum Rating</h6>
            {this.state.arrStar.map((el, i) => (
              <span
                className={el.img}
                key={4 - i}
                onClick={() => this.handleRating(i)}
                style={
                  el.colTest === false
                    ? { color: "white" }
                    : { color: "yellow" }
                }
              ></span>
            ))}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
