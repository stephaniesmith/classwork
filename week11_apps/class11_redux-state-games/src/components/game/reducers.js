export const SELECTION = 'SELECTION';
export const NEW_ROUND = 'NEW_ROUND';

export const ROUND_STATE = {
  PLAYING: 'PLAYING',
  WIN: 'WIN',
  LOSE: 'LOSE',
  TIE: 'TIE'
};

export const getSelections = state => state.selections;
export const getRoundState = state => {
  const [one, two] = getSelections(state);
  
  if(!one || !two) return ROUND_STATE.PLAYING;

  if(one === two) return ROUND_STATE.TIE;

  if(one === 'rock' && two === 'scissors'
    || one === 'scissors' && two === 'paper'
    || one === 'paper' && two === 'rock'
  ) return ROUND_STATE.WIN;

  return ROUND_STATE.LOSE;
};

const init = () => [];
export function selections(state = init(), { type, payload }) {
  switch(type) {
    case SELECTION: {
      const copy = [...state];
      copy[payload.index] = payload.choice;
      return copy;
    }
    case NEW_ROUND: {
      return init();
    }
    default:
      return state;
  }
}