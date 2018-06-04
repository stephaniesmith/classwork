import React, { Component } from 'react';

export default class Home extends Component {

  componentDidMount(...args) {
    console.log('componentDidMount', args);
  }

  componentDidUpdate(prevProps) {
    console.log('location pathname', 
      prevProps.location.pathname, this.props.location.pathname,
      prevProps.location.pathname === this.props.location.pathname);
  }

  render() {
    // console.log(this.props.match, this.props.location, this.props.history);

    return <div>I am Home! Play the Game!</div>;
  }
}