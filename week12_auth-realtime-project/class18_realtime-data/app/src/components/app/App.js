import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import Header from './Header';
import Auth from '../auth/Auth';
import ChatRooms from '../chat/ChatRooms';
import Chat from '../chat/Chat';
import Play from '../games/Play';
import Game from '../games/Game';
import styles from './App.css';
import { petRef } from '../../services/firebaseRef';

class App extends PureComponent {

  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  };

  state = {
    name: '',
    type: ''
  };

  componentDidMount() {
    this.props.tryLoadUser();
    this.onPetValue = petRef.on('value', data => {
      this.setState(data.val());
    });
  }

  componentWillUnmount() {
    petRef.off('value', this.onPetValue);
  }

  handleNameChange = ({ target }) => {
    petRef.child('name').set(target.value);
  };

  render() {
    const { checkedAuth } = this.props;
    // const { name, type } = this.state;

    return (
      <Router>
        <div>
          <Header/>
          {/* <div>
            <h2>{name} the {type}</h2>
            <input value={name} onChange={this.handleNameChange}/>
          </div> */}
          <main className={styles.app}>
            { checkedAuth && 
            <Switch>
              <Route exact path="/" render={() => <h2>I am Home</h2>}/>
              <Route path="/auth" component={Auth}/>
              <PrivateRoute exact path="/play" component={Play}/>
              <PrivateRoute path="/games/:key" render={({ match }) => <Game dbKey={match.params.key}/>}/>
              <Route exact path="/chat" component={ChatRooms}/>
              <Route path="/chat/:key" component={Chat}/>
              <Redirect to="/"/>
            </Switch>
            }
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(App);