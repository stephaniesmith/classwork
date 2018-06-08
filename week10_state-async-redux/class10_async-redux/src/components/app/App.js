import React, { PureComponent } from 'react';
import Fruits from '../fruits/Fruits';
import Loading from './Loading';
import Error from './Error';

export default class App extends PureComponent {
  render() {
    return (
      <main>
        <h1>Redux Demo</h1>
        <Loading/>
        <Error/>
        <Fruits/>
      </main>
    );
  }
}