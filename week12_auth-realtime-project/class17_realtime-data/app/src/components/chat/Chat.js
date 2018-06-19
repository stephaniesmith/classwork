import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { chatsRef } from '../../services/firebaseRef';
import Messages from './Messages';
import AddMessage from './AddMessage';
import styles from './Chat.css';

class Chat extends PureComponent {

  static propTypes = {
    match: PropTypes.object
  }

  render() {
    const { match } = this.props;
    const { key } = match.params;

    return (
      <section className={styles.chat}>
        <h2>Chat</h2>
        <AddMessage dbKey={key}/>
        <Messages roomKey={key} 
          dbQuery={chatsRef.child(key).orderByChild('created')}/>
      </section>
    );
  }
}

export default Chat;