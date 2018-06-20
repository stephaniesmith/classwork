import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Credentials.css';
import FormControl from '../shared/FormControl';

export default class Credentials extends PureComponent {

  static propTypes = {
    submit: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired
  };

  state = {
    username: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state);
  }

  render() {
    const { action } = this.props;
    const { username, password } = this.state;

    return (
      <form className={styles.credentials} onSubmit={this.handleSubmit}>
        
        <FormControl label="username">
          <input name="username" value={username} onChange={this.handleChange}/>
        </FormControl>

        <FormControl label="password">
          <input type="password" name="password"
            value={password} onChange={this.handleChange}/>
        </FormControl>
        
        <FormControl>
          <button>{action}</button>
        </FormControl>
      </form>
    );
  }
}