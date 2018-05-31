import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovie } from '../../services/movieApi';
import styles from './MovieDetail.css';

// import { Link } from 'react-router-dom';

export default class MovieDetail extends Component {

  static propTypes = {
    imdbID: PropTypes.string.isRequired,
    history: PropTypes.object
  };

  state = {
    movie: null
  };

  componentDidMount() {
    getMovie(this.props.imdbID)
      .then(movie => this.setState({ movie }));
  }

  handleBack = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { movie } = this.state;

    if(movie === null) return null;

    return (
      <article className={styles['movie-detail']}>
        <div className="container">
          {/* <a href="" onClick={this.handleBack}>Back</a> */}
          <h2>{movie.Title}</h2>
          <p>{movie.Rated} release {movie.Year}</p>
          <p>
            <img src={movie.Poster}/>
            {movie.Plot}
          </p>
        </div>
      </article>
    );
  }
}