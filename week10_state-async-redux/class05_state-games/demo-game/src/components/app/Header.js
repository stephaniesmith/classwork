import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1>Super Game!</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/game">Game</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}
