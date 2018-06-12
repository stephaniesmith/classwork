import { 
  SELECTION, NEW_ROUND, TALLY_ROUND, ROUND_STATE,
  getRoundState } from './reducers';

const getRandomThrow = () => {
  const index = Math.floor(Math.random() * Math.floor(3));
  return ['rock', 'paper', 'scissors'][index];
};

export const makeSelection = choice => {
  return (dispatch, getState) => {
    // dispatch player action
    dispatch({ 
      type: SELECTION, 
      payload: { index: 0, choice } 
    });

    // dispatch computer action
    dispatch({ 
      type: SELECTION, 
      payload: { 
        index: 1, 
        // get computer throw
        choice: getRandomThrow()
      } 
    });

    const state = getState();
    const roundState = getRoundState(state);
    // if(roundState === ROUND_STATE.PLAYING) return;

    //dispatch tally round
    dispatch({
      type: TALLY_ROUND,
      payload: roundState
    });

  };
};

export const newRound = () => ({ type: NEW_ROUND });
