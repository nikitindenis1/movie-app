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
    }, 400);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.show_video !== this.props.show_video){
     setTimeout(() => {
      this.setState({
        loaded: false,
      });
     }, 2500);
    }
  }

  render() {
    const { loaded } = this.state;
    const { movie } = this.props;
  
    return (
      <div
        id={loaded ? "movie__element__details--active" : ""}
        className="movie__element__details flex__column"
      >
        <h2>{movie.title}</h2>
        <span className='flex__start'>
          <h3>Rating:</h3>
          <figure>{movie.vote_average}</figure>
        </span>
        <aside className="movie__element__details__arrow"></aside>
      </div>
    );
  }
}

export default MovieDetails;
