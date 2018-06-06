import React, { Component } from 'react';
import Fruits from './Fruits';

const fruits = [
  { name: 'banana', color: 'yellow' },
  { name: 'orange', color: 'orange' },
  { name: 'apple', color: 'red' },
];

export default class FruitsContainer extends Component {

  state = {
    fruits: []
  };

  componentDidMount() {
    Promise.resolve(fruits)
      .then(fruits => this.setState({ fruits }));
  }

  handleAdd = fruit => {
    this.setState(({ fruits }) => {
      fruits.push(fruit);
      return { fruits };
    });
  };

  handleRemove = fruit => {
    this.setState(({ fruits }) => {
      const index = fruits.indexOf(fruit);
      if(index === -1) return;
      fruits.splice(index, 1);
      return { fruits };
    });    
  };

  render() {
    const { fruits } = this.state;
    return <Fruits 
      fruits={fruits} 
      onAdd={this.handleAdd}
      onRemove={this.handleRemove}
    />;
  }
}
