import React, { Component } from 'react';

export default class App extends Component {

  state = {
    numbers: []
  };

  componentDidMount() {
    fetch('/api/whatever')
      .then(response => response.json())
      .then(numbers => this.setState({ numbers }));

  }

  render() {
    return (
      <main>
        <h1>Proxy</h1>
        {this.state.numbers.map((n, i) => <p key={i}>{n}</p>)}
      </main>
    );
  }
}