import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FruitForm from './FruitForm';

export default class Fruit extends Component {

  static propTypes = {
    fruit: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  render() {
    const { fruit, onRemove, onUpdate } = this.props;
    const { name, color } = fruit;

    return (
      <li key={name} style={{ color }}>
        {name}
        <button style={{ color: 'black' }} onClick={() => onRemove(fruit)}>X</button>
        {/* <FruitForm label="Update" fruit={fruit} onComplete={updated => onUpdate(updated)}/> */}
      </li>
    );
  }
}
