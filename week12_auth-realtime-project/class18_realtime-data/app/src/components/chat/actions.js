import { roomsRef, chatsRef } from '../../services/firebaseRef';

export const addRoom = room => {
  return roomsRef.push().set(room);
};

export const removeRoom = key => {
  return roomsRef.child(key).remove();
};

export const addMessage = (roomKey, message) => {
  return chatsRef.child(roomKey).push().set(message);
};