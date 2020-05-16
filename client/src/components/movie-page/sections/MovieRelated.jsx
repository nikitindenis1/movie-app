import React, { Component } from "react";
import { apiGetRequest } from "../../../api/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGES_API } from "../../../tools/keys";
class MovieRelated extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.getRelated();
  }
  getRelated = async () => {
    const { movie_id } = this.props;
    const api = `movie/${movie_id}/similar`;
    const res = await apiGetRequest(api);
    if (res) {
      this.setState({
        similar: res.results,
        loaded: true,
      });
    }
  };

  render() {
    const { similar } = this.state;
    const {size} = this.props
    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: size === 4 ? 3  :5,
        slidesToScroll: 1,
      };
    return <div className="movie__page__related">
       <Slider {...settings}>
          {similar && similar.length > 0
            ? similar.map((m) => {
            return <div
            onClick = {() => this.props.changeMovie(m.id)}
            className='movie__page__related__element'
            key = {m.id}
            >
              <img src={`${IMAGES_API}${m.poster_path}`} alt=""/>
            </div>;
              })
            : "  "}
        </Slider>
    </div>;
  }
}

export default MovieRelated;
