import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withRef from '../shared/firebase/withRef';
import styles from './Message.css';

class Message extends PureComponent {

  static propTypes = {
    message: PropTypes.object
  }


  render() {
    const { message } = this.props;
    if(!message) return null;

    return (
      <li className={styles['message']}>
        {message.text} {message.image && <img src={message.image}/>}
      </li>
    );
  }
}

export default withRef({
  propName: 'message'
})(Message);