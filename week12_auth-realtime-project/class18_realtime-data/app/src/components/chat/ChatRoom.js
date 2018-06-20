import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withRef from '../shared/firebase/withRef';
import { roomsRef } from '../../services/firebaseRef';
import { removeRoom } from './actions';
import styles from './ChatRoom.css';

class ChatRoom extends PureComponent {

  static propTypes = {
    room: PropTypes.object
  }

  handleRemove = () => {
    removeRoom(this.props.room.key);
  };

  render() {
    const { room } = this.props;
    if(!room) return null;

    return (
      <li className={styles['chat-room']}>
        <Link to={`/chat/${room.key}`}>{room.name}</Link>
        <button onClick={this.handleRemove}>🗑</button>
      </li>
    );
  }
}

export default withRef({
  dbRef: roomsRef,
  propName: 'room'
})(ChatRoom);