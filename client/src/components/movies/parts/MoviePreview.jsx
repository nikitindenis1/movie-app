import React, { Component } from 'react';
import moment from 'moment'
import { IMAGES_API } from '../../../tools/keys';
class MoviePreview extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        setTimeout(() => {
                this.setState({
                    loaded:true
                })
        }, 100);
        console.log('fwewefwef')
    }
    render() {
        const {loaded} = this.state
        const {movie_details} = this.props
        console.log(movie_details)
        return (
            <div 
            id={loaded ? 'movie__preview--active' : ''}
            className='movie__preview'> 
            <button
            onClick = {() => this.props.handleMovieSelect()}
            >X</button>
           {movie_details ? <div
           className='movie__preview__content'
           >

           <h2>{movie_details.title}</h2>
           <span>
           <h4>{moment(movie_details.release_date, '\YYYY-MM-DD').format('YYYY')}</h4>
           <figure>{movie_details.adult  ?'18+'  :'12+'}</figure>
           </span>
           <p>{movie_details.overview}</p>
           <ul>
               {
                   movie_details.genres.map(m => {
                   return <li>{m.name}</li>
                   })
               }
           </ul>
           <button
           onClick = {() => this.props.goToMoviePage(movie_details.id)}
           >Movie page</button>
           </div> : ''}
          {movie_details ?  <section className='movie__preview__bg'>
            <img src={`${IMAGES_API}/${movie_details.backdrop_path}`} alt=""/>
           </section>
                 :''}
            </div>
        );
    }
}

export default MoviePreview;