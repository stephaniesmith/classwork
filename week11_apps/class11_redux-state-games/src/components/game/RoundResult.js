import React, { Component } from 'react';
import styles from './RoundResult.css';

export default class RoundResult extends Component {
  render() {
    return (
      <section className={styles.round}>
        Player 1 wins!
      </section>
    );
  }
}