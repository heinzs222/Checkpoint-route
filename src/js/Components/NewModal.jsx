import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addMovie, editMovie } from "../actions/index";
import { connect } from "react-redux";

const mapDispatchToProps = {
  addMovie: addMovie,
  editMovie: editMovie
};

class NewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      toAddMovie: {
        img: this.props.buttonLabel === "Add" ? "" : this.props.movie.img,
        title: this.props.buttonLabel === "Add" ? "" : this.props.movie.title,
        rating: this.props.buttonLabel === "Add" ? 0 : this.props.movie.rating,
        id: this.props.buttonLabel === "Add" ? Date.now() : this.props.movie.id,
        trailer:
          this.props.buttonLabel === "Add" ? "" : this.props.movie.trailer
      }
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange = e => {
    this.setState({
      toAddMovie: { ...this.state.toAddMovie, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { img, title, rating } = this.state.toAddMovie;
    if (img !== "" && title !== "" && rating >= 0) {
      if (this.props.buttonLabel === "Add") {
        this.props.addMovie(this.state.toAddMovie);
        this.setState({
          toAddMovie: {
            ...this.state.toAddMovie,
            img: "",
            title: "",
            rating: 0
          }
        });
      } else
        this.props.editMovie({
          id: this.props.movie.id,
          img: this.state.toAddMovie.img,
          title: this.state.toAddMovie.title,
          rating: this.state.toAddMovie.rating,
          trailer: this.state.toAddMovie.trailer
        });
      this.toggle();
    } else alert("One of the fields is empty");
  };

  updateState = () => {
    this.setState({
      toAddMovie: {
        img: this.props.buttonLabel === "Add" ? "" : this.props.movie.img,
        title: this.props.buttonLabel === "Add" ? "" : this.props.movie.title,
        rating: this.props.buttonLabel === "Add" ? 0 : this.props.movie.rating,
        id: this.props.buttonLabel === "Add" ? Date.now() : this.props.movie.id,
        trailer:
          this.props.buttonLabel === "Add" ? "" : this.props.movie.trailer
      }
    });
  };
  render() {
    return (
      <div>
        <Button
          color={this.props.buttonLabel === "Add" ? "success" : "warning"}
          onClick={() => {
            this.toggle();
            this.updateState();
          }}
        >
          {this.props.buttonLabel}
        </Button>
        <div>
          {this.state.modal ? (
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>
                {this.props.buttonLabel === "Add" ? "Add Movie" : "Edit Movie"}
              </ModalHeader>
              <ModalBody>
                <div className="addform">
                  <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                      className="formInput"
                      type="text"
                      placeholder="Insert picture Link"
                      name="img"
                      defaultValue={
                        this.props.buttonLabel === "Add"
                          ? ""
                          : this.props.movie.img
                      }
                      onChange={this.handleChange}
                    />
                  </form>
                  <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                      className="formInput"
                      type="text"
                      placeholder="Insert Title"
                      name="title"
                      defaultValue={
                        this.props.buttonLabel === "Add"
                          ? ""
                          : this.props.movie.title
                      }
                      onChange={this.handleChange}
                    />
                  </form>
                  <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                      className="formInput"
                      type="text"
                      placeholder="Insert Rating"
                      name="rating"
                      defaultValue={
                        this.props.buttonLabel === "Add"
                          ? ""
                          : this.props.movie.rating
                      }
                      onChange={e =>
                        Number(e.target.value) <= 5
                          ? this.handleChange(e)
                          : (e.target.value = "")
                      }
                    />
                  </form>
                  <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                      className="formInput"
                      type="text"
                      placeholder="Insert Trailer"
                      name="trailer"
                      defaultValue={
                        this.props.buttonLabel === "Add"
                          ? ""
                          : this.props.movie.trailer
                      }
                      onChange={this.handleChange}
                    />
                  </form>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={e => {
                    this.handleSubmit(e);
                  }}
                >
                  {this.props.buttonLabel === "Add"
                    ? "Add Movie"
                    : "Save Changes"}
                </Button>{" "}
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(NewModal);
