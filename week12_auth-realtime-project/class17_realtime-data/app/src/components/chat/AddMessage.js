import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addMessage } from './actions';
import styles from './AddMessage.css';


const initMessage = () => ({
  text: ''
});

class AddMessage extends PureComponent {

  static propTypes = {
    dbKey: PropTypes.string.isRequired
  };

  state = initMessage();

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleKeyPress = event => {
    if(event.key !== 'Enter' || event.shiftKey) return;
    this.handleSubmit();
  };

  handleSubmit = event => {
    event && event.preventDefault();
    const { text } = this.state;
    const { dbKey } = this.props;

    addMessage(dbKey, { 
      text,
      created: -new Date().getTime()
    }).then(() => {
      this.setState(initMessage());
    });
  }

  render() {
    const { text } = this.state;

    return (
      <section className={styles['add-message']}>
        <form onSubmit={this.handleSubmit}>
          <textarea name="text" value={text} 
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}/>
          <button>Send</button>
        </form>
      </section>
    );
  }
}

export default AddMessage;