import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import withRef from '../shared/firebase/withRef';
import { gamesRef } from '../../services/firebaseRef';
import { makePlay } from './actions';
import styles from './Game.css';
import { myTurn } from './selectors';

class Game extends PureComponent {

  handlePlay = index => {
    const { game, user, makePlay } = this.props;
    const { playerX } = game;

    makePlay({ 
      gameKey: game.key,
      index,
      play: user._id === playerX ? 'X' : 'O'
    });
  }
  render() {
    const { game, user } = this.props;
    if(!game) return null;
    const { playerX, playerY: playerO, board } = game;
    const isMyTurn = myTurn(game, user);
    
    return (
      <section className={styles.game}>
        <p>PlayerX: {playerX}</p>
        <p>PlayerO: {playerO}</p>
        <p>{isMyTurn ? 'Your Turn' : 'Their Turn'}</p>
        <ul>
          {board.map((char, i) => (
            <li key={i} className={isMyTurn && !char ? 'open' : ''} onClick={
              isMyTurn && !char ? () => this.handlePlay(i) : () => {}
            }>{char}</li>
          ))}
        </ul>
      </section>
    );
  }
}

const wrappedWithRef = withRef({
  dbRef: gamesRef,
  propName: 'game'
})(Game);

export default connect(
  state => ({ user: getUser(state) }),
  { makePlay }
)(wrappedWithRef);
