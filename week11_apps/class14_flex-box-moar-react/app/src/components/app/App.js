import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Pets from './Pets';
import PetDetail from './PetDetail';
import styles from './App.css';
import { getUrl } from '../../services/images';

// const options = 'e_sepia:80,c_fill,w_100,g_face,r_max';

export default class App extends Component {

  render() {
    const src = 'https://ladylibertyflag.com/wp-content/uploads/2015/11/PIRATE-3X5-V1-607.jpg';
    
    return (
      <Router>
        <main className={styles.app}>
          <h1>Demos</h1>
          <div>
            <Link to="/images">Images</Link>
            &nbsp;
            <Link to="/pets">Pets</Link>
          </div>

          <Switch>
            <Route path="/images" render={() => (
              <section>
                <h2>Response Image with Cloudinary <strong>fetch</strong></h2>
                <img className="image" src={getUrl(src, 'w_100')}/>
              </section>
            )}/>
            <Route exact path="/pets" component={Pets}/>
            <Route path="/pets/:id" render={({ match }) => <PetDetail id={match.params.id}/>}/>
            <Redirect to="/pets"/>
          </Switch>

        </main>
      </Router>
    );
  }
}