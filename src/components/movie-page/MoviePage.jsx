import React, { Component } from "react";
import "./movie-page.css";
import { MOVIES_ROUTE, MOVIE_ROUTE } from "../../tools/routes";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import MovieCredits from "./sections/MovieCredits";
import MovieRelated from "./sections/MovieRelated";
import MoviePageAbout from "./parts/MoviePageAbout";
import { apiGetRequest } from "../../api/api";
class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }

  getMovieId = () => {
    let url = window.location.pathname.split('/')
    let movie_id =url[url.length - 1] ? url[url.length - 1]  : this.props.match.params.id
      
      return movie_id
  };

  async componentWillMount() {
    const { from_movies, selected_movie } = this.props;
    let movie_id = this.getMovieId()
    if (from_movies) {
      setTimeout(() => {
        this.setState({
          active: true,
        });
      }, 50);
    } else {
      this.setState({
        active: true,
      });
    }
    this.setState({
      movie_id,
    });
      await this.getMovie(movie_id)
    setTimeout(() => {
      this.getVideo(movie_id)
    }, 400);
  }
  getMovie = async (movie_id) => {
    const api = `movie/${movie_id}`;
    const res = await apiGetRequest(api);
    if (res) {
      this.setState({
        movie: res,
      });
    }
  };

  getVideo = async (movie_id) => {
    const api = `movie/${movie_id}/videos`;
    await apiGetRequest(api).then((res) => {
      this.setState({
        video: res && res.results[0] ? res.results[0].key : "",
      });
    });
  };

  handleActiveSection = (active_section) => {
    this.setState({
      active_section,
    });
  };

  closePage = () => {
    this.setState({
      active: false,
    });
    setTimeout(() => {
      this.props.close();
      window.history.pushState("/", "/", `/`);
    }, 300);
  };

  back = () => {
    const { from_movies } = this.props;
    if (from_movies) {
      this.closePage();
      this.props.updateGlobalReducer("pause_movie", false);
    } else this.props.history.push(MOVIES_ROUTE);
  };
  changeMovie = async(id) => {
    await this.getMovie(id)
    setTimeout(() => {
      this.getVideo(id)
    }, 400);
    this.setState({
      movie_id:id
    })
  };
  render() {
    const { active, movie, active_section, movie_id, fade_out, video } = this.state;
    const actions = [
      {
        name: "Reviews",
        value: "reviews",
      },
      {
        name: "Credits",
        value: "credits",
      },
      {
        name: "Related",
        value: "similar",
      },
    ];

    return (
      <div id={active ? "movie__page--active" : ""} className="movie__page">
        <section className="movie__page__overlay"> </section>
        <button onClick={() => this.back()}>X</button>

        {<MoviePageAbout fade_out={fade_out} movie_id={movie_id} movie = {movie} video = {video}  />}

        <ul className="movie__page__actions flex__center">
          {actions.map((m, i) => {
            return (
              <li onClick={() => this.handleActiveSection(m.value)}>
                {m.name}
              </li>
            );
          })}
        </ul>
        <div className="movie__page__content">
          { active_section === "credits" ? (
            <MovieCredits movie_id={movie_id} />
          ) : active_section === "similar" ? (
            <MovieRelated changeMovie={this.changeMovie} movie_id={movie_id} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ global }) {
  return { global };
}

export default withRouter(connect(mapStateToProps, actions)(MoviePage));
