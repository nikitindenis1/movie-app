import React, { Component } from "react";
import { apiGetRequest } from "../../../api/api";
import { IMAGES_API } from "../../../tools/keys";

class MovieCredits extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.getCredits();
  }

  getCredits = async () => {
    const { movie_id } = this.props;
    const api = `movie/${movie_id}/credits`;
    const res = await apiGetRequest(api);
    if (res) {
      this.setState({
        credits: res.cast,
        loaded: true,
      });
    }
  };
  render() {
    const { credits } = this.state;
    return (
      <ul className="movie__page__credits flex__start">
        {credits && credits.length > 0
          ? credits.map((m) => {
              return (
                <li
                className='flex__column'
                >
                  <figure>
                    <img src={`${IMAGES_API}${m.profile_path}`} alt="" />
                  </figure>
                  <h4>{m.name}</h4>
                  <h5>{m.character}</h5>
                </li>
              );
            })
          : "No credits"}
      </ul>
    );
  }
}

export default MovieCredits;
