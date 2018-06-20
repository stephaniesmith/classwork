import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { queueToPlay } from './actions';
import { getUser } from '../auth/reducers';
import { userGamesRef } from '../../services/firebaseRef';
import MyGames from './MyGames';

class Play extends PureComponent {

  render() {
    const { queueToPlay, user } = this.props;
    
    return (
      <section>
        <p>
          <button onClick={queueToPlay}>Play a Game</button>
        </p>
        <MyGames dbQuery={userGamesRef.child(user._id)}/>
      </section>
    );
  }
}

export default connect(
  state => ({ user: getUser(state) }),
  { queueToPlay }
)(Play);