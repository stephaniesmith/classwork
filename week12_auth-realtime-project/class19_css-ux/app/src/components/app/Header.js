import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import { Link, withRouter } from 'react-router-dom';
import Error from './Error';
import styles from './Header.css';

class Header extends Component {

  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    match: PropTypes.object
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    const { user, match } = this.props;
    const isHome = match.isExact && match.url === '/';

    return (
      <header className={styles.header}>
        <h1 className={isHome ? 'home-page' : 'other-page'}>Pets 4 All</h1>
        <nav>
          <Link to="/">Home</Link>
          &nbsp;
          <Link to="/pets">Pets</Link>
          &nbsp;
          {
            user
              ? <Link to="/" onClick={this.handleLogout}>Logout</Link>
              : <Link to="/auth">Login</Link>
          }
          
        </nav>
        <div className="account">
          { user && <span>Welcome {user.name}!</span> }
        </div>
        <div className="error">
          <Error/>
        </div>
      </header>
    );
  }
}

export default withRouter(connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Header));
