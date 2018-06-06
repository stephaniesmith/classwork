import React, { Component } from 'react';
import Fruits from '../fruits/Fruits';

export default class App extends Component {
  render() {
    return (
      <main>
        <h1>Redux Demo</h1>
        <Fruits/>
      </main>
    );
  }
}