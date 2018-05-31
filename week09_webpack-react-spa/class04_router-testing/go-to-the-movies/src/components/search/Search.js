import React, { Component } from 'react';
import Movies from '../movies/Movies';
import SearchForm from '../search/SearchForm';
import { search } from '../../services/movieApi';
import PropTypes from 'prop-types';
import queryString from 'query-string';

export default class Search extends Component {
  
  state = {
    movies: null,
    error: null,
    searchTerm: ''
  };

  searchMovies = () => {
    const { searchTerm } = this.state;
    if(!searchTerm) return;

    search(searchTerm)
      .then(({ Search }) => {
        this.setState({ movies: Search });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  handleSearch = searchTerm => {
    this.setState({ searchTerm, error: null }, this.searchMovies);
  };
  
  render() {
    const { movies, error, searchTerm } = this.state;

    return (
      <div>
        <SearchForm searchTerm={searchTerm} onSearch={this.handleSearch}/>
        {error && <div>{error}</div>}
        {(!error && movies) && <Movies movies={movies}/>}
      </div>
    );
  }
}