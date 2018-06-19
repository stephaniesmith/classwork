import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withList from '../shared/firebase/withList';
import { chatsRef } from '../../services/firebaseRef';
import Message from './Message';

class Messages extends PureComponent {

  static propTypes = {
    messages: PropTypes.array
  }

  render() {
    const { messages, roomKey } = this.props;
    if(!messages) return null;

    return (
      <section>
        <h2>Messages</h2>
        {/* <pre>{JSON.stringify(messages, true, 2)}</pre> */}
        <ul>
          {messages.map(key => <Message 
            key={key} 
            dbRef={chatsRef.child(roomKey)} 
            dbKey={key}
          />)}
        </ul>
        
      </section>
    );
  }
}

export default withList({ 
  propName: 'messages'
})(Messages);