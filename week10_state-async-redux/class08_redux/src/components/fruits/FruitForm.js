import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FruitForm.css';

const defaultState = {
  name: '',
  color: ''
};

export default class FruitForm extends Component {

  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
  };
  
  state = defaultState;

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState);
  };

  render() {
    const { name, color } = this.state;
    const { label } = this.props;

    return (
      <form className={styles['add-fruit']} onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" value={name} onChange={this.handleChange}/>
        </label>

        <label>
          Color:
          <input name="color" value={color} onChange={this.handleChange}/>
        </label>
        <button type="submit">{label}</button>
      </form>
    );
  }
}