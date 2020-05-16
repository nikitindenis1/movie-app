import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/actions";
import { withRouter } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { apiGetRequest } from "../../../../api/api";
import MoviewPopupOverview from "./MoviewPopupOverview";
import MoviePopupDetails from "./MoviePopupDetails";
import MoviePopupRelated from "./MoviePopupRelated";

const buttons = ["OVERVIEW", "RELATED", "DETAILS"];
class MoviePopup extends Component {
  constructor() {
    super();
    this.state = {
      section: "OVERVIEW",
      movie: {},
    };
  }

  componentWillMount() {
    const { selected_movie } = this.props;
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    }, 50);
    setTimeout(() => {
      this.getData(selected_movie);
    }, 300);
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.selected_movie !== this.props.selected_movie) {
      this.getData(nextProps.selected_movie);
    }
   
  }

  getData = async (id) => {
    this.setState({
      movie:{},
      video:''
    })
    await this.getMovie(id);
    this.getCredits(id);
    this.getRelated(id);
      this.setState({
        section: "OVERVIEW",
      });
  };
  getVideo = async (id) => {
      const api = `movie/${id}/videos`;
      await apiGetRequest(api).then((res) => {
       setTimeout(() => {
        this.setState({
          video: res && res.results[0] ? res.results[0].key : "",
        });
       }, 400);
      });
   

  };

  getMovie = async (movie_id) => {
    const api = `movie/${movie_id}`;
    const res = await apiGetRequest(api);
    if (res) {
      this.setState({
        movie: res,
      });
    }
  };
  getRelated = async (movie_id) => {
    const api = `movie/${movie_id}/similar`;
    const res = await apiGetRequest(api);
    if (res) {
      this.setState({
        similar: res.results,
        loaded: true,
      });
    }
  };

  getCredits = async (movie_id) => {
    const api = `movie/${movie_id}/credits`;
    const res = await apiGetRequest(api);
    if (res) {
      this.setState({
        credits: res.cast,
        loaded: true,
      });
    }
  };
  close = () => {
    this.setState({
      loaded: false,
      video: "",
      
    });
    setTimeout(() => {
      this.props.closePreview();
    }, 200);
  };

  changeSection = (m) => {
    this.setState({
      section: m,
    });
  };
  render() {
    const { loaded, section, movie, credits, similar, video } = this.state;
    const { selected_movie , size, mobile} = this.props;

    return (
      <div id={loaded ? "movie__popup--active" : ""} className="movie__popup">
        <button className="movie__popup__close" onClick={() => this.close()}>
          <CloseIcon />
        </button>

        <MoviewPopupOverview
          movie={movie}
          video = {video}
          selected_movie = {selected_movie}
          active={section === "OVERVIEW"}
          getVideo = {() => this.getVideo(selected_movie)}
          mobile = {mobile}
        />
        <div
          style={{
            opacity: section === "OVERVIEW" ? 0 : 1,
            pointerEvents: section !== "OVERVIEW" ? "all" : "none",
          }}
          className="movie__popup__sections"
        >
          <aside className="movie__popup__sections__shadow"></aside>
          <header>{movie.title}</header>
          {section === "DETAILS" ? (
            <MoviePopupDetails 
           
            credits={credits} movie={movie} />
          ) : section === "RELATED" ? (
            <MoviePopupRelated
            size = {size}
              getData={this.getData}
              similar={similar}
              movie_id={selected_movie}
              updateParent={this.props.updateParent}
            />
          ) : ''}
        </div>
        <section className="movie__popup__actions flex__start">
          {buttons && buttons.length > 0
            ? buttons.map((m, i) => {
                return (
                  <button
                    style={{
                      borderBottom: section === m ? "5px solid red" : "",
                    }}
                    onClick={() => this.changeSection(m)}
                    key={i}
                  >
                    {m}
                  </button>
                );
              })
            : ""}
        </section>
      </div>
    );
  }
}

function mapStateToProps({ global }) {
  return { global };
}

export default withRouter(connect(mapStateToProps, actions)(MoviePopup));
