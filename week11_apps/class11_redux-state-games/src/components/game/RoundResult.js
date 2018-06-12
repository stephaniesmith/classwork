import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMatch, getRoundState, ROUND_STATE } from './reducers';
import { newRound } from './actions';
import styles from './RoundResult.css';

const {  PLAYING, TIE, WIN, LOSE } = ROUND_STATE;

const message = {
  [PLAYING]: 'Make your selection',
  [TIE]: 'It\'s a tie!',
  [WIN]: 'You won!',
  [LOSE]: 'Sad day, you lost :('
};

class RoundResult extends Component {

  static propTypes = {
    roundState: PropTypes.string.isRequired,
    newRound: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  };

  render() {
    const { roundState, newRound, match } = this.props;
    return (
      <section className={styles.round}>
        <p>
          Wins: {match[WIN]}&nbsp;
          Loses: {match[LOSE]}&nbsp;
          Tie: {match[TIE]}
        </p>
        <p>{message[roundState]}</p>
        { roundState === PLAYING ||
          <button onClick={newRound}>Play Again</button>
        }
      </section>
    );
  }
}

export default connect(
  state => ({
    roundState: getRoundState(state),
    match: getMatch(state)
  }),
  { newRound }
)(RoundResult);