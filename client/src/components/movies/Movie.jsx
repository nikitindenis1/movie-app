import React, { Component } from "react";
import { IMAGES_API, VIDEO_API } from "../../tools/keys";
import { apiGetRequest } from "../../api/api";
import ReactPlayer from "react-player";
import MovieDetails from "./parts/MovieDetails";
import MuteBtn from "../parts/MuteBtn";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import Fade from "react-reveal/Fade";

class Movie extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleMouseEnter = async () => {
    const timeout = setTimeout(async () => {
      this.setState({
        active: true,
        z_index: 999999,
      });
      this.getVideo();
    }, 350);
    this.setState({
      timeout,
    });
  };

  handleMouseOut = () => {
    window.clearTimeout(this.state.timeout);
    setTimeout(() => {
      this.setState({
        active: false,
        video: false,
        show_video: false,
        z_index: 0,
      });
    }, 200);
 
  };

  getVideo = async () => {
    const { active } = this.state;
    const { movie } = this.props;
    const api = `movie/${movie.id}/videos`;
  if(active){
    await apiGetRequest(api).then((res) => {
      this.setState({
        video:  res && res.results[0] ? res.results[0].key : "",
      });
    });
  }
  };

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
  handleSelect = () => {
    this.props.handleMovieSelect();
    this.setState({
      show_video: false,
      video: false,
      active: false,
    });
  };

  render() {
    const { movie, selected, selected_movie, mobile } = this.props;
    const {
      z_index,
      video,
      show_video,
      movie_details,
      active,
      img_loaded,
    } = this.state;
    const { movie_muted } = this.props.global;

    return (
      <Fade clear>
        <div
          ref={(el) => (this.yourElement = el)}
          id={active ? "movie__element--active" : ""}
          style={{
            zIndex: z_index,
            border: selected_movie ? "2px solid white" : "",
          }}
          onMouseEnter={() =>
            !mobile && !selected ? this.handleMouseEnter() : ""
          }
          onMouseLeave={() => this.handleMouseOut()}
          onClick={(e) => {
            e.stopPropagation();
            this.handleSelect();
          }}
          className="movie__element"
        >
          {video && !selected ? (
            <>
              <div
                id={show_video ? "video__wrapper--active" : ""}
                className="video__wrapper"
              >
                <ReactPlayer
                  onBufferEnd={this.onReady}
                  className="video"
                  url={`${VIDEO_API}${video}`}
                  playing
                  onEnded={this.handleVideoEnded}
                  muted={movie_muted}
                  onError={() => this.handleVideoEnded}
                />
              </div>
              {show_video ? (
                <MuteBtn
                  muted={movie_muted}
                  mute={() =>
                    this.props.updateGlobalReducer("movie_muted", !movie_muted)
                  }
                />
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}

          <img
            style={{
              opacity: show_video || !img_loaded ? 0 : 1,
            }}
            src={`${IMAGES_API}/${movie.poster_path}`}
            onLoad={() => this.setState({ img_loaded: true })}
            alt=""
          />
          {active && !selected ? (
            <MovieDetails
              show_video={show_video}
              movie_details={movie_details}
              movie={movie}
            />
          ) : (
            ""
          )}

          <div
            style={{
              opacity: selected_movie ? 1 : "",
            }}
            className="movie__arrow__box"
          >
            <aside className="movie__arrow"></aside>
          </div>
        </div>
      </Fade>
    );
  }
}

function mapStateToProps({ global }) {
  return { global };
}

export default connect(mapStateToProps, actions)(Movie);
