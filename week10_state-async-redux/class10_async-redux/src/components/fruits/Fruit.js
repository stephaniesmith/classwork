import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FruitForm from './FruitForm';
import Comments from './Comments';

export default class Fruit extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    fruit: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleCancel = () => {
    this.setState({ editing: false });
  }

  handleUpdate = data => {
    this.props.onUpdate(data);
    this.setState({ editing: false });
  }

  render() {
    const { editing } = this.state;
    const { fruit, onRemove } = this.props;
    const { name, color } = fruit;

    return (
      <li key={name}>
        <h4>
          <span style={{ color }}>{name}</span>
          {editing || <button onClick={this.handleEdit}>✐</button>}
          <button onClick={() => onRemove(fruit)}>X</button>
        </h4>
        {editing &&
          <div>
            <FruitForm 
              label="Update" 
              fruit={fruit} 
              onComplete={this.handleUpdate}
              onCancel={this.handleCancel}
            />
          </div>
        }
        <Comments fruitId={fruit.id}/>
      </li>
    );
  }
}
