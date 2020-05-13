import React, { Component } from "react";
import { IMAGES_API, VIDEO_API } from "../../tools/keys";
import { apiGetRequest } from "../../api/api";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import MovieDetails from "./parts/MovieDetails";


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
     await this.getMovieDetails()
     this.getVideo();
    }, 500);
    this.setState({
      timeout,
    });
  };

  getMovieDetails = async () => {
      const {movie} = this.props
    const api = `movie/${movie.id}`
   await apiGetRequest(api).then(res => {
        if(res){
            this.setState({
                movie_details:res
            })
        }
   })
  }
  handleMouseOut = () => {
    window.clearTimeout(this.state.timeout);

    this.setState({
      active: false,
      video: false,
      show_video: false,
    });

    setTimeout(() => {
      this.setState({
        z_index: 0,
      });
    }, 100);
  };
  handleSelect = async (ref) => {
    this.props.handleMovieSelect();

    var element = document.querySelector("#movie__element--active");
   setTimeout(() => {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: 'nearest'
    });
   }, 350);

   
  };

  getVideo = async () => {
    const { video } = this.state;
    const { movie } = this.props;
    const api = `movie/${movie.id}/videos`;
    if (video) {
      this.setState({
        video,
      });
    } else {
      await apiGetRequest(api).then((res) => {
        this.setState({
          video: res && res.results[0] ? res.results[0].key : "",
        });
      });
    }
  };
  onReady = () => {
    this.setState({
      show_video: true,
    });
  };
  render() {
    const ref = React.createRef();
    const { movie, selected } = this.props;
    const { active, z_index, video, show_video, movie_details } = this.state;

    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: video ? 1 : 0,
        controls: 0,
      },
    };
    return (
      <div
        id={active   ? "movie__element--active" : ""}
      
        style={{
          zIndex: z_index,
        }}
      
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseOut()}
        onClick={() => this.handleSelect(ref)}
        className="movie__element"
      >
        <aside 
         ref = {ref}
        className="movie__offset"></aside>
        {video && active ? (
          <div
            id={show_video ? "video__wrapper--active" : ""}
            className="video__wrapper"
          >
            <ReactPlayer
              onBufferEnd={this.onReady}
              className="video"
              url={`${VIDEO_API}${video}`}
              playing
            />
          </div>
        ) : (
          ""
        )}

        <img
          style={{
            opacity: show_video ? 0 : 1,
          }}
          src={`${IMAGES_API}/${movie.poster_path}`}
          alt=""
        />
      {active  ?  <MovieDetails 
        movie_details = {movie_details}
        movie = {movie}
      /> : ''}
      </div>
    );
  }
}

export default Movie;
