import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Door from './Door';
import ChooseItem from './ChooseItem';
import styles from './Room.css';

export default class Room extends Component {

  static propTypes = {
    room: PropTypes.object,
    action: PropTypes.string,
    onMove: PropTypes.func.isRequired,
    onPickup: PropTypes.func.isRequired
  };
  
  render() {
    const { room, action, onMove, onPickup } = this.props;
    const { title, description, image, doors, items } = room;

    return (
      <section className={styles.room} style={{ backgroundImage: `url(${image})` }}>
        <h3>{title}</h3>
        <p>{description}</p>
        {!!items.length && (
          <div>
            <h4>Items in Room</h4>
            <ChooseItem items={items} onChoose={onPickup}/>
          </div>
        )}
        <h4>Doors</h4>
        <ul className="doors">
          {Object.entries(doors).map(([direction, roomKey]) => {
            return <Door 
              key={direction} 
              direction={direction}
              onOpen={() => onMove(roomKey)}/>;
          })}
        </ul>
        {action && <p className="action">{action}</p>}
      </section>
    );
  }
}
