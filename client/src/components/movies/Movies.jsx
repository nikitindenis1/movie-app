import React, { Component } from "react";
import "./movies.css";
import { apiGetRequest } from "../../api/api";
import MoviesList from "./MoviesList";
import MoviePage from "../movie-page/MoviePage";
import { withRouter } from "react-router-dom";

const generateList = (list) => {
  let arr = [];
  list.forEach((element) => {
    return (arr = [...arr, ...element]);
  });
  return arr;
};

export const generateArrays = (list, pending_movies, size) => {
  let new_list = [...list, ...pending_movies];
  let pending = [];
  var movies = [];

  for (var i = 0; i < new_list.length; i += size) {
    let sliced = new_list.slice(i, i + size);
    if (sliced.length === size) {
      movies.push(sliced);
    } else {
      pending.push(...sliced);
    }
  }
  return {
    movies,
    pending,
  };
};
class Movies extends Component {
  constructor() {
    super();
    this.state = {
      has_more: true,
      movies: [],
      page: 1,
      size: 6,
      pending_movies: [],
    };
  }
  async componentDidMount() {
    setTimeout(() => {
      this.setState({
        stop: true,
      });
    }, 400);
    window.addEventListener("resize", this.updateSize);
    this.updateSize();
  }

  updateSize = () => {
    const { movies, pending_movies } = this.state;
    const width = window.innerWidth;
    let size = this.state.size;
    let list = [];
    let obj = {};

    if (width <= 1500 && size !== 5) {
      size = 5;
      list = generateList(movies);
      obj = generateArrays(list, pending_movies, size);
      this.setState({
        movies: obj.movies,
        pending_movies: obj.pending,
        size,
      });
    }

    if (width <= 1200 && size !== 4) size = 4;
    list = generateList(movies);
    obj = generateArrays(list, pending_movies, size);
    this.setState({
      movies: obj.movies,
      pending_movies: obj.pending,
      size,
    });

    if (width <= 650 && size !== 2) size = 2;
    list = generateList(movies);
    obj = generateArrays(list, pending_movies, size);
    this.setState({
      movies: obj.movies,
      pending_movies: obj.pending,
      size,
    });

    if (width > 1500 && size !== 6) size = 6;
    this.setState({
      size,
    });
    list = generateList(movies);
    obj = generateArrays(list, pending_movies, size);
    this.setState({
      movies: obj.movies,
      pending_movies: obj.pending,
    });

    this.setState({
      page_loaded: true,
    });
  };

  loadElements = (page) => {
    const { size } = this.state;
    const api = "movie/popular";
    try {
      apiGetRequest(api, page).then((res) => {
        this.handleMovies(res.results, size);
      });
    } catch (error) {}
  };

  handleMovies = (list, size) => {
    const { movies, pending_movies } = this.state;
    const obj = generateArrays(list, pending_movies, size);
    this.setState({
      movies: [...movies, ...obj.movies],
      pending_movies: obj.pending,
    });
  };
  goToMoviePage = (selected_movie) => {
    this.setState({
      selected_movie
    })
    window.history.pushState("/", "/", `/${selected_movie}`);
  }

  render() {
    const { movies, stop, page_loaded, selected_movie } = this.state;
    console.log(selected_movie)
    return page_loaded ? (
      <div className="movies">
        <MoviesList
        goToMoviePage = {this.goToMoviePage}
          stop={stop}
          movies={movies}
          loadElements={this.loadElements}
        />
       {selected_movie ? <MoviePage
       close = {this.goToMoviePage}
       /> : ''}
      </div>
    ) : (
      ""
    );
  }
}

export default withRouter(Movies);
