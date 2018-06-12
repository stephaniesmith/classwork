import React, { Component } from 'react';
import Player from '../player/Player';
import RoundResult from '../game/RoundResult';
import styles from './Game.css';

export default class Game extends Component {
  render() {
    return (
      <section className={styles.game}>
        <div className="players">
          <Player index={0}/>
          <Player index={1}/>
        </div>
        <RoundResult/>
      </section>
    );
  }
}