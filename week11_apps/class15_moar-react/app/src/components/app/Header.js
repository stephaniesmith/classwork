import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

export default class Header extends Component {

  render() {
    
    return (
      <header>
        <h1>Demos</h1>
        <nav>
          <Link to="/">Home</Link>
          &nbsp;
          <Link to="/pets">Pets</Link>
          &nbsp;
          <Route path="/pets/:id" render={({ match: { url } }) => {
            return (
              <Fragment>
                &nbsp;
                <Link to={`${url}/paragraph`}>paragraph view</Link>
                &nbsp;
                <Link to={`${url}/list`}>list view</Link>
              </Fragment>
            );
          }}/>
        </nav>
      </header>
    );
  }
}
