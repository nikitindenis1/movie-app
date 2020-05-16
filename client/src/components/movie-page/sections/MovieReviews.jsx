import React, { Component } from "react";
import { apiGetRequest } from "../../../api/api";

class MovieReviews extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount(){
      this.getReviews()
  }
  getReviews = async () => {
    const { movie_id } = this.props;
    const api = `movie/${movie_id}/reviews`;
    const res = await apiGetRequest(api);
    if (res) {
      this.setState({
        reviews: res.results,
        loaded:true,
      });
    }
  };
  render() {
    const { reviews } = this.state;
    console.log(reviews)
    return (
      
      <div className="movie__page__reviews">
        <ul>
          {reviews && reviews.length > 0 ? reviews.map((m) => {
            return (
              <li key={m.id}>
                <div className='flex__start'> 
                <h4>Written by </h4>
                <h3>{m.author}</h3>
                </div>
                <p>{m.content}</p>
              </li>
            );
          }) : 'No reviwes'}
        </ul>
      </div>
    );
  }
}

export default MovieReviews;
