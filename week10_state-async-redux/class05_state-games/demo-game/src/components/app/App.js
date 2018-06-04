import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';


import './App.css';

export default class App extends Component {
  
  state = {
    animals: 'cats'
  }

  render() {
    const { animals } = this.state;

    return (
      <Router>
        <div>
          <Header/>
          <main>
            <Switch>
              <Route path="/" render={props => <Home animals={animals} {...props}/>}/>
              {/* <Route path="/game" component={Game}/> */}
              <Redirect to="/"/>
            </Switch>
          </main>
          <button onClick={() => this.setState({ animals: 'dogs' })}>change</button>
        </div>
      </Router>
      
    );
  }
}
