import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './FruitForm.css';

const defaultState = {
  name: '',
  color: ''
};

export default class FruitForm extends PureComponent {

  static propTypes = {
    fruit: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    label: PropTypes.string.isRequired
  };

  static getDerivedStateFromProps({ fruit }, { edit }) {
    if(edit) return null;

    return {
      edit: fruit ? { ...fruit } : { ...defaultState }
    };
  }
  
  state = {
    edit: null
  };

  handleChange = ({ target }) => {
    this.setState(({ edit }) => {
      return {
        edit: {
          ...edit,
          [target.name]: target.value
        }
      };
    });
  };
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state.edit);
    this.setState({
      edit: { ...defaultState }
    });
  };

  render() {
    const { name, color } = this.state.edit;
    const { label, onCancel } = this.props;

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
        {onCancel && <button type="reset" onClick={onCancel}>Cancel</button>}
      </form>
    );
  }
}