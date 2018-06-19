import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withList from '../shared/firebase/withList';
import { roomsRef } from '../../services/firebaseRef';
import ChatRoom from './ChatRoom';
import AddRoom from './AddRoom';
import styles from './ChatRooms.css';

class ChatRooms extends PureComponent {

  static propTypes = {
    rooms: PropTypes.array
  }

  render() {
    const { rooms } = this.props;
    if(!rooms) return null;

    return (
      <section>
        <h2>Available Rooms</h2>
        {/* <pre>{JSON.stringify(rooms, true, 2)}</pre> */}
        <ul className={styles['chat-rooms']}>
          {rooms.map(key => <ChatRoom key={key} dbKey={key}/>)}
        </ul>
        <h3>Add a Room</h3>
        <AddRoom/>
      </section>
    );
  }
}

export default withList({ 
  dbQuery: roomsRef,
  propName: 'rooms'
})(ChatRooms);