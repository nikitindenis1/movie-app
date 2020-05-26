import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions/actions";
import Movies from "./components/movies/Movies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MOVIES_ROUTE, MOVIE_ROUTE } from "./tools/routes";
import MoviePage from "./components/movie-page/MoviePage";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path={MOVIES_ROUTE} component={Movies} />
          <Route exact path={MOVIE_ROUTE} component={MoviePage} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps({ global }) {
  return { global };
}

export default connect(mapStateToProps, actions)(App);
