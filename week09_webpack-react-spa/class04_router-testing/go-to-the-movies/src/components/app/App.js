import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Search from '../search/Search';
import MovieDetail from '../movies/MovieDetail';


import './App.css';

export default class App extends Component {
  
  state = {
    html: { 
      __html: '<p>Some <strong>bold</strong> ideas</p><script>console.log("hack")</script>'
    }
  };

  render() {

    return (
      <Router>
        <div>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/search" component={Search}/>
              <Route path="/movies/:id" render={({ match, history }) => {
                return <MovieDetail imdbID={match.params.id} history={history}/>;
              }}/>
              <Redirect to="/"/>
            </Switch>
          </main>
          <div dangerouslySetInnerHTML={this.state.html}></div>
        </div>
      </Router>
    );
  }
}
