import { getUser } from '../auth/reducers';
import { queueRef, gamesRef } from '../../services/firebaseRef';

export const queueToPlay = () => (dispatch, getState) => {
  const { _id: id } = getUser(getState());
  queueRef.push().set({ 
    user: id,
    created: new Date().getTime()
  });
};

export const makePlay = ({ gameKey, index, play }) => () => {
  gamesRef.child(gameKey).child('board').child(index).set(play);
};