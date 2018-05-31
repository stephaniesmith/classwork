import React, { Component } from 'react';
import styles from './ComponentB.css';

export default class ComponentB extends Component {
  
  render() {

    return (
      <section className={styles['details']}>
        <h2>I am B!</h2>
        <p>Some text about B</p>
      </section>
    );
  }
}
