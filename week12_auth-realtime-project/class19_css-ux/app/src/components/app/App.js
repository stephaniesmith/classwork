import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import Header from './Header';
import Home from './Home';
import Auth from '../auth/Auth';
import PetList from '../pets/PetList';
import PetDetail from '../pets/PetDetail';
import AddPet from '../pets/AddPet';
import styles from './App.css';
import { TransitionGroup } from 'react-transition-group';

class App extends PureComponent {

  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.tryLoadUser();
  }

  render() {
    const { checkedAuth } = this.props;

    return (
      <Router>
        <div>
          <Header/>
          <main className={styles.app}>
            { checkedAuth && 
            <TransitionGroup>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/auth" component={Auth}/>
                {/* <PrivateRoute exact path="/pets" component={PetList}/>
                <PrivateRoute path="/pets/new" component={AddPet}/>
                <PrivateRoute path="/pets/:id" component={PetDetail}/> */}
                <Redirect to="/"/>
              </Switch>
            </TransitionGroup>
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