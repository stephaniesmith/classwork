import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlayerSelection } from './actions';
import { makeSelection } from './actions';
import styles from './Player.css';

class Player extends PureComponent {

  static propTypes = {
    index: PropTypes.number.isRequired,
    selection: PropTypes.string,
    makeSelection: PropTypes.func.isRequired
  };

  render() {
    const { index, selection, makeSelection } = this.props;

    return (
      <div className={styles.player}>
        <h3>Player {index + 1}</h3>
        { selection 
          ? <p>{selection}</p>
          : index === 0 && ['rock', 'paper', 'scissors'].map(choice => {
            return (
              <button 
                key={choice} 
                onClick={() => makeSelection(choice)}
              >
                {choice}
              </button>
            );
          })
        }
      </div>
    );
  }
}

export default connect(
  (state, { index }) => ({
    selection: getPlayerSelection(index, state)
  }),
  { makeSelection }
)(Player);