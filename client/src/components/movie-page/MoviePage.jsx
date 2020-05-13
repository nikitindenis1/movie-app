import React, { Component } from 'react';
import './movie-page.css'
class MoviePage extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        setTimeout(() => {
                this.setState({
                    active:true
                })
        }, 20);
    }


    closePage = () => {
        this.setState({
            active:false
        })
        setTimeout(() => {
          this.props.close()
          window.history.pushState("/", "/", `/`);
        }, 300);
    }
    
    render() {
        const {active} = this.state
        return (
            <div 
            id={active ? 'movie__page--active' : ''}
            className='movie__page'>
                    <button
                    onClick = {() => this.closePage()}
                    >X</button>
                    <section className='movie__page__header'>

                    </section>
            </div>
        );
    }
}

export default MoviePage;