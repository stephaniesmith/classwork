import React, { Component } from 'react';
import { rooms, start as currentRoom } from '../rooms';
import Player from './Player';
import Room from './Room';

export default class Game extends Component {

  state = {
    action: '',
    player: {
      name: 'Player 1',
      inventory: []
    },
    rooms,
    currentRoom
  };

  handleMove = roomKey => {
    this.setState(prevState => ({ 
      currentRoom: prevState.rooms[roomKey],
      action: ''
    }));
  };

  handlePickup = item => {
    if(item.prevent) {
      this.setState({ action: item.prevent });
      return;
    }

    this.setState(({ player, currentRoom }) => {
      // take out of room
      const index = currentRoom.items.indexOf(item);
      if(index === -1) return;
      currentRoom.items.splice(index, 1);

      // add to player inventory
      player.inventory.push(item);

      // tell setState about changes
      return { player, currentRoom };
    });
  };

  handleUse = item => {
    this.setState(({ player, currentRoom }) => {
      // take out of players inventory
      const index = player.inventory.indexOf(item);
      if(index === -1) return;
      player.inventory.splice(index, 1);

      let action = '';
      if(currentRoom.use) action = currentRoom.use(item);
      
      if(!action) {
        currentRoom.items.push(item);
        action = `You dropped ${item.description}`;
      }

      return {
        action,
        player,
        currentRoom
      };

    });
  };

  handleNameChange = name => {
    this.setState(({ player }) => {
      player.name = name;
      return { player };
    });
  }

  render() {
    const { player, currentRoom, action } = this.state;

    return (
      <section>
        <h2>Hall of Golden Spiders</h2>
        
        <Player player={player} 
          onUse={this.handleUse}
          onNameChange={this.handleNameChange}/>

        <Room room={currentRoom}
          action={action} 
          onMove={this.handleMove}
          onPickup={this.handlePickup}/>

      </section>
    );
  }
}