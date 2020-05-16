import React, { Component } from "react";
import "./movies.css";
import MoviesList from "./MoviesList";
import { withRouter } from "react-router-dom";

class Movies extends Component {
  constructor() {
    super();
    this.state = {};
  }




  render() {
    const { page_loaded } = this.state;
 
    return (
      <div className="movies">
      <MoviesList 
      />
    </div>
    )
  }
}

export default withRouter(Movies);
