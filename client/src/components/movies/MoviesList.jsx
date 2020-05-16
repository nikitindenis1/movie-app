import React, { Component } from "react";
import Movie from "./Movie";
import { wait, generateArrays, getMovieSize, generateList } from "../../functions/functions";
import MoviePopup from "./parts/movie-preview/MoviePopup";
import { apiGetRequest } from "../../api/api";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "../navbar/Navbar";
import SmallLoader from "../parts/SmallLoader";

class MoviesList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      page: 1,
      size: 6,
      page_limit:6,
      pending_movies: [],
      hasMore: true,
      page_loaded:true,
      api:'movie/popular'
    };
  }
  async componentWillMount() {
   
    window.scrollTo(0,0)
    window.addEventListener("resize", this.updateSize);

    await this.updateSize();
    this.loadElements()
 
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize);
  }
  updateSize = async () => {
    const { movies, pending_movies, size } = this.state;
    const width = window.innerWidth;

    const obj = await getMovieSize(movies, pending_movies, width, size);
    if (obj.movies) {
      this.setState({
        movies: obj.movies,
        pending_movies: obj.pending,
        size: obj.size,
      });
    }
  };

  handleMovieSelect = (row_id, movie) => {
    this.setState({
      selected: row_id,
      selected_movie: movie.id,
      show_popup: true,
    });
 
    this.scrollToElement();
  };

  updateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  scrollToElement = async () => {
    wait(600).then(() => {
      var element = document.querySelector("#selected__row__offset");
      if (element) {
        element.scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "nearest",
        });
      }
    });
  };
  selectCategory = (category) => {
    this.setState({
      api:category.api,
      page:1,
      movies:[],
      pending_movies:[],
      selected_movie:'',
      show_popup:false,
      selected:''
    }, () => {
      this.loadElements()
    })
}
  closePreview = () => {
    this.setState({
      selected: "",
      selected_movie: "",
      show_popup: "",
    });
  };
  loadElements = async () => {
    const { size, page, api } = this.state;
    
    try {
      await apiGetRequest(api, page).then(async (res) => {
        this.handleMovies(res.results, size);
        this.setState({
          page:page + 1
        })
      });
    } catch (error) {}
  };


  handleMovies = (list, size) => {
    const { movies, pending_movies, page } = this.state;
    const obj = generateArrays(list, pending_movies, size);
    this.setState({
      movies: [...movies, ...obj.movies],
      pending_movies: obj.pending,
    });
   
  };

  render() {
    const {
      selected,
      selected_movie,
      show_popup,
      movies,
      page,
      page_limit,
      size
    } = this.state;
    return (  
      <section className="movies__list flex__start">
       <Navbar 
       selectCategory = {this.selectCategory}
       />
        <InfiniteScroll
          dataLength={generateList(movies).length} 
          next={this.loadElements}
          hasMore={page < page_limit}
          loader={<SmallLoader />}
        >
          {movies && movies.length > 0
            ? movies.map((list, i) => {
                return (
                  <div
                    key={i}
                    id={selected === i ? "selected__row" : ""}
                    className="movies__list__flex flex__column"
                  >
                    {selected === i ? (
                      <aside
                       id="selected__row__offset"></aside>
                    ) : (
                      ""
                    )}
                    <ul className="flex__start">
                      {list.map((m) => {
                        return (
                          <Movie
                          mobile = {size === 2}
                            key={m.id}
                            selected={selected === i}
                            handleMovieSelect={() =>
                              this.handleMovieSelect(i, m)
                            }
                            selected_movie={selected_movie === m.id}
                            movie={m}
                          />
                        );
                      })}
                    </ul>
                    {selected === i && selected_movie && show_popup ? (
                      <MoviePopup
                      size = {size}
                      mobile = {size === 2}
                        selected_movie={selected_movie}
                        closePreview={this.closePreview}
                        updateParent={this.updateState}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                );
              })
            : <div className='movies__first__loading'><SmallLoader /></div>}
        </InfiniteScroll>
      </section>
    );
  }
}

export default MoviesList;
