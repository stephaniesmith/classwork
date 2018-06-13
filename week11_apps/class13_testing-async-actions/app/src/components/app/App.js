import React, { Component } from 'react';
import Game from '../game/Game';

export default class App extends Component {
  render() {
    return (
      <main>
        <h1>Rock Paper Scissors</h1>
        <Game/>
      </main>
    );
  }
}