import React, { Component } from 'react';
import Movies from '../movies/Movies';
import SearchForm from './SearchForm';
import Paging from '../paging/Paging';
import { search } from '../../services/movieApi';
import PropTypes from 'prop-types';
import queryString from 'query-string';

const getSearch = location => location ? location.search : '';

export default class Search extends Component {
  
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  state = {
    movies: null,
    error: null,
    searchTerm: '',
    page: 1
  };

  componentDidMount() {
    this.searchFromQuery(this.props.location.search);
  }

  componentWillReceiveProps({ location }) {
    const next = getSearch(location);
    const current = getSearch(this.props.location);
    if(current === next) return;
    this.searchFromQuery(next);
  }
  
  searchFromQuery(query) {
    const { search: searchTerm, page } = queryString.parse(query);

    this.setState({ searchTerm, page: +page });
    if(!searchTerm) return;

    search(searchTerm, page)
      .then(({ Search }) => {
        this.setState({ movies: Search });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  makeSearch = () => {
    this.setState({ error: null });
    const { searchTerm, page } = this.state;
    
    const query = {
      search: searchTerm || '',
      page: page || 1
    }

    this.props.history.push({
      search: queryString.stringify(query)
    });
  };

  handleSearch = searchTerm => {
    this.setState({ 
      error: null,
      searchTerm,
      page: 1
    }, this.makeSearch);
  };

  handlePage = page => {
    this.setState({ 
      error: null,
      page
    }, this.makeSearch);
  }
  
  render() {
    const { movies, error, searchTerm, page } = this.state;

    return (
      <div>
        <SearchForm searchTerm={searchTerm} onSearch={this.handleSearch}/>
        {error && <div>{error}</div>}
        <Paging page={page} onPage={this.handlePage}/>
        {(!error && movies) && <Movies movies={movies}/>}
      </div>
    );
  }
}