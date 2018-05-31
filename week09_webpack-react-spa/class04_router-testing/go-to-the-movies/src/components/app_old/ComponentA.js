import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ComponentA.css';
import ComponentB from './ComponentB';

export default class ComponentA extends Component {

  static propTypes = {
    message: PropTypes.string.isRequired,
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      year: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }).isRequired
  };
  
  render() {
    const { message } = this.props;

    return (
      <section className={styles['details']}>
        <h2>I am A!</h2>
        <p>{message}</p>
        {/* <ComponentB/> */}
      </section>
    );
  }
}