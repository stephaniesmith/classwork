import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import Search from '../search/Search';
import styles from './App.css';

export default class App extends Component {
  
  render() {

    return (
      <Router>
        <div className={styles['App']}>
          <header>
            <h1>I am App!</h1>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
          </header>

        <Switch>
          <Route exact path="/" render={() => <div>Home!</div>}/>
          <Route path="/search" component={Search}/>
          <Redirect to="/"/>
        </Switch>

        </div>
      </Router>
    );
  }
}


// this was from scoped css demo:
/*
          { <section>
            <div className="sidebar">
              <ComponentA message={'some real string message'}
                movie={{ title: 'm', year: 1971 }}/>
            </div>
            <div className="main-area">
              <ComponentB/>
            </div>
          </section> }
*/