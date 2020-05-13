import React, { Component } from 'react';
import Movie from "./Movie";
import InfiniteScroll from "react-infinite-scroller";
import MoviePreview from './parts/MoviePreview';
import { apiGetRequest } from '../../api/api';



class MoviesList extends Component {
    constructor(){
        super()
        this.state = {

        }
    }


    handleMovieSelect = (row_id, movie_id) => {
      const body = document.querySelector('body')
      // body.style.overflow = row_id ? 'hidden'  :''
      body.style.pointerEvents = row_id ? 'none'  :''
      setTimeout(() => {
        body.style.pointerEvents = 'all'
      }, 800);
      this.setState({
        selected: row_id,
        movie_id
      });
      if(movie_id){
          this.getMoviewDetails(movie_id)
      }
    };


    getMoviewDetails = async (movie_id) => {
      const api = `movie/${movie_id}`
      const res  = await apiGetRequest(api)
     if(res){
       this.setState({
         movie_details:res
       })
     }
    }



  


    render() {
        const {stop, movies} = this.props
        const {selected, movie_details} = this.state
        return (
            <section className="movies__list flex__start">
            <InfiniteScroll
              pageStart={0}
              loadMore={this.props.loadElements}
              hasMore={!stop}
              loader={
                <div className="loader" key={0}>
                  Loading ...
                </div>
              }
            //   getScrollParent={() => this.scrollParentRef}
              useWindow={false}
            >
              {movies && movies.length > 0
                ? movies.map((list, i) => {
                    return (
                      <ul
                        id={selected === i ? "selected__row" : ""}
                        className="movies__list__flex flex__center"
                      >
                        {list.map((m) => {
                          return (
                            <Movie
                            selected = {selected === i}
                              handleMovieSelect={() => this.handleMovieSelect(i, m.id)}
                              movie={m}
                            />
                          );
                        })}
                        {selected === i ? <MoviePreview 
                        goToMoviePage = {this.props.goToMoviePage}
                        movie_details = {movie_details}
                        handleMovieSelect = {this.handleMovieSelect}
                        /> : ""}
                      </ul>
                    );
                  })
                : ""}
            </InfiniteScroll>
          </section>
        );
    }
}

export default MoviesList;