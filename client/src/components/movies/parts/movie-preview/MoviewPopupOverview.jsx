import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/actions";
import Fade from "react-reveal/Fade";
import ReactPlayer from "react-player";
import { IMAGES_API_Q, VIDEO_API } from "../../../../tools/keys";
import MuteBtn from "../../../parts/MuteBtn";
import moment from "moment";
import MobileTrailer from "./MobileTrailer";
class MoviewPopupOverview extends Component {
  constructor() {
    super();

    this.state = {};
  }
  hideVideo = () => {
    this.setState({
      show_video: false,
    });
  };

  showVideo = () => {
    this.setState({
      show_video: true,
    });
  };

  componentWillReceiveProps(nextProps) {
    let new_id = nextProps.selected_movie;
    let current_id = this.props.selected_movie;
    if (new_id !== current_id) {
      this.setState({
        img_loaded: false,
        show_video: "",
        mobile_on: "",
      });
    }
  }
  onLoad = () => {
    this.setState({
      img_loaded: true,
    });
    this.props.getVideo();
  };
  render() {
    const { movie, active, video, mobile } = this.props;
    const { img_loaded, muted, show_video, mobile_on } = this.state;
    return (
      <div className="movie__popup__overview movie__popup__section">
        <section
          style={{
            opacity: active ? 0 : 1,
            pointerEvents: "none",
          }}
          className="overlay"
        ></section>
        <div className="movie__popup__overview__content">
          {movie.id ? (
            <Fade clear>
              <h2>{movie.title}</h2>
              <span className="flex__start">
                <h4>
                  {moment(movie.release_date, "YYYY-MM-DD").format("YYYY")}
                </h4>
                <figure className="movie__popup__overview__figure flex__start">
                  {movie.adult ? "Adult" : "All ages"}
                </figure>
              
              </span>
              <p>{movie.overview}</p>
              <span className="flex__start">
                <h4>Rating</h4>
                <figure className="flex__center movie__popup__overview__figure">{`${
                  movie.vote_average ? movie.vote_average.toFixed(1) : "0"
                }`}</figure>
              </span>
            </Fade>
          ) : (
            ""
          )}
        </div>

        {!mobile ? (
          <section className="movie__popup__overview__bg">
            <div
              style={{
                opacity: show_video ? 1 : 0,
                transition: "0.5s all",
              }}
              className="movie__popup__overview__video"
            >
              {!active && !show_video ? (
              null
              ) : (
                <ReactPlayer
                  muted={muted}
                  onBufferEnd={this.showVideo}
                  className="video"
                  url={`${VIDEO_API}${video}`}
                  playing={active ? true : false}
                  onEnded={this.hideVideo}
                />
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
                  transition: "0.3s all",
                }}
                onLoad={() => this.onLoad()}
                src={`${IMAGES_API_Q}/${movie.backdrop_path}`}
                alt=""
              />
            ) : (
              null
            )}
          </section>
        ) : (
          <MobileTrailer 
          onLoad = {this.onLoad}
          video={video} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ global }) {
  return { global };
}

export default connect(mapStateToProps, actions)(MoviewPopupOverview);
