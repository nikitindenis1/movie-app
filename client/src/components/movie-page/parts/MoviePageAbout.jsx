import React, { Component } from "react";
import { IMAGES_API_Q, VIDEO_API } from "../../../tools/keys";
import { apiGetRequest } from "../../../api/api";
import ReactPlayer from "react-player";
import MuteBtn from "../../parts/MuteBtn";
import moment from "moment";
import StarRatings from "react-star-ratings";

const calcTime = (number) => {
  let hours = String(number / 60).split("")[0];
  let minutes = number - hours * 60;
  return `${hours}h ${minutes}m`;
};
const generateGenres = (genres) => {
  let arr = genres ? genres.map((m) => m.name) : [];
  let string = `Genres: ${arr.join(", ")}`;
  return string;
};

class MoviePageAbout extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }

componentWillReceiveProps(nextProps){
 if(nextProps.movie_id !== this.props.movie_id){
   console.log('wefwwfwefw')
   this.setState({
     show_video:false
   })
 }
}
  onReady = () => {
    this.setState({
      show_video: true,
    });
  };

  handleVideoEnded = () => {
    this.setState({
      video: false,
      show_video: false,
    });
  };
  handleImgeOnLoad = () => {
    this.setState({
      img_loaded: true,
    });
  };
  render() {
    const { show_video, muted, img_loaded,  } = this.state;
    const {fade_out, movie, video} = this.props
    return (
      <header
      style ={{
        opacity:fade_out ? 0 :1
      }}
      className="movie__page__header  flex__between">
        <div className="movie__page__about">
          <h2>{movie.title}</h2>
          <span className="flex__start">
            <h3>{moment(movie.release_date, "YYYY-MM-DD").format("YYYY")}</h3>
            <figure className='flex__center'>{movie.adult ? "Adult" : "All"}</figure>
            <h3>{calcTime(movie.runtime)}</h3>
          </span>
          <div className="movie__ratings">
            <StarRatings
              rating={movie.vote_average}
              starRatedColor="#FDD430"
              numberOfStars={10}
            />
          </div>
          <p>{movie.overview}</p>
          <p id='movie__page__about__genres'>{generateGenres(movie.genres)}</p>
        </div>
        <div className="movie__page__bg">
          <div
            style={{
              opacity: show_video ? 1 : 0,
              transition: "0.5s all",
            }}
            className="movie__page__trailer"
          >
            {video ? (
              <ReactPlayer
              onError = {this.handleVideoEnded}
                muted={muted}
                onBufferEnd={this.onReady}
                className="video"
                url={`${VIDEO_API}${video}`}
                playing
                onEnded={this.handleVideoEnded}
              />
            ) : (
              ""
            )}

            <MuteBtn
              muted={muted}
              mute={() => this.setState({ muted: !muted })}
            />
          </div>

          {movie.backdrop_path ? (
            <img
              style={{
                opacity: img_loaded ? 1 : 0,
                transition: "0.7s all",
              }}
              onLoad={() => this.handleImgeOnLoad()}
              src={`${IMAGES_API_Q}/${movie.backdrop_path}`}
              alt=""
            />
          ) : (
            ""
          )}
        </div>
      </header>
    );
  }
}

export default MoviePageAbout;
