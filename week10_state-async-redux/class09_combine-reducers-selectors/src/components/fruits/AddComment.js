import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddComment extends Component {

  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  state = {
    text: ''
  };

  handleChange = ({ target }) => {
    this.setState({ text: target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add a comment:
          <input name="text" value={text} onChange={this.handleChange}/>
        </label>
        <button type="submit">Post</button>
      </form>
    );
  }
}