import { SELECTION } from './reducers';

const getRandomThrow = () => {
  const index = Math.floor(Math.random() * Math.floor(3));
  return ['rock', 'paper', 'scissors'][index];
};

export const makeSelection = choice => {
  return dispatch => {
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
  };
};
