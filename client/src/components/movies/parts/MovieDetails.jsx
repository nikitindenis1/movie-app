import React, { Component } from "react";
import { apiGetRequest } from "../../../api/api";

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    }, 20);
  }

  render() {
    const { loaded } = this.state;
    const { movie_details, movie } = this.props;
    console.log(movie);
    return (
      <div
        id={loaded ? "movie__element__details--active" : ""}
        className="movie__element__details flex__column"
      >
        <h2>{movie.title}</h2>
        <aside className="movie__element__details__arrow"></aside>
      </div>
    );
  }
}

export default MovieDetails;
