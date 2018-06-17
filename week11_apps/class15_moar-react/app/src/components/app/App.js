import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import PetList from './PetList';
import PetDetail from './PetDetail';
import AddPet from './AddPet';
import styles from './App.css';

export default class App extends Component {

  render() {
    
    return (
      <Router>
        <div>
          <Header/>
          <main className={styles.app}>
            <Switch>
              <Route exact path="/" render={() => <h2>I am Home</h2>}/>
              <Route exact path="/pets" component={PetList}/>
              <Route path="/pets/new" component={AddPet}/>
              <Route path="/pets/:id" component={PetDetail}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
