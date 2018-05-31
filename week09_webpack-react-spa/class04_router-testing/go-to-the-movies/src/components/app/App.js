import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import Search from '../search/Search';
import styles from './App.css';

export default class App extends Component {
  
  render() {

    return (
      <Router>
        <div className={styles.app}>
          <h1>I am App!</h1>
          {/* <section>
            <div className="sidebar">
              <ComponentA message={'some real string message'}
                movie={{ title: 'm', year: 1971 }}/>
            </div>
            <div className="main-area">
              <ComponentB/>
            </div>
          </section> */}
          <Search/>
        </div>
      </Router>
    );
  }
}
