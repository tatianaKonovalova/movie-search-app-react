import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Search from './components/movies/Search';
import Movies from './components/movies/Movies';
import Movie from './components/movies/Movie';
import axios from 'axios';
import './App.css';

class App extends Component {


  state = {
    movies: [],
    movie: {}
  }

  // Search Movies

  searchMovies = async (text) => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7e340fc7b7cb5e0a9e392603dd404d03&query=${text}`);

    this.setState( {movies: res.data.results} );
  };

  //Clear Movies From State
  clearMovies = () => {
    this.setState({ movies: [] });
  };

  //Get Movie Info
  getMovie = async (id) => {
    const res = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=7e340fc7b7cb5e0a9e392603dd404d03`);

    this.setState({ movie: res.data });
  };

  render() {
    return (
      <Router>
        <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" render={props => (
              <Fragment>
                <Search 
                searchMovies={this.searchMovies} 
                clearMovies={this.clearMovies}
                showClearBtn={ this.state.movies.length > 0 ? true : false }/>
                <Movies movies={this.state.movies} />
              </Fragment>
            )} />
            <Route exact path="/movie/:id" render={props => (
              <Movie {...props} getMovie={this.getMovie} movie={this.state.movie} />
            )} />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
  
}

export default App;
