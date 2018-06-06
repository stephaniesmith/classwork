import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FruitForm from './FruitForm';
import Fruit from './Fruit';
import { loadFruits, addFruit, updateFruit, removeFruit } from './actions';

class Fruits extends Component {

  static propTypes = {
    fruits: PropTypes.array,
    addFruit: PropTypes.func.isRequired,
    removeFruit: PropTypes.func.isRequired,
    loadFruits: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadFruits();
  }

  render() {
    const { fruits, addFruit, removeFruit } = this.props;
    if(!fruits) return null;

    return (
      <div>
        <h2>Fruits</h2>
        <FruitForm onComplete={addFruit} label="Add"/>
        <ul>
          {fruits.map(fruit => <Fruit 
            key={fruit.name} 
            onRemove={removeFruit} 
            onUpdate={updateFruit}
            fruit={fruit}
          />)}
        </ul>
      </div>
    );
  }
}

export default connect(
  // fn that maps state to props
  state => ({ fruits: state.fruits }),
  // list of actions to inject as props
  { loadFruits, addFruit, updateFruit, removeFruit }
)(Fruits);