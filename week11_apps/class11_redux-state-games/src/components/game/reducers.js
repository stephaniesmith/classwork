export const SELECTION = 'SELECTION';
export const NEW_ROUND = 'NEW_ROUND';
export const TALLY_ROUND = 'TALLY_ROUND';

export const ROUND_STATE = {
  PLAYING: 'PLAYING',
  WIN: 'WIN',
  LOSE: 'LOSE',
  TIE: 'TIE'
};

export const getMatch = state => state.match;
export const getSelections = state => state.selections;
export const getPlayerSelection = (index, state) => getSelections(state)[index];
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

const initSelections = () => [];
export function selections(state = initSelections(), { type, payload }) {
  switch(type) {
    case SELECTION: {
      const copy = [...state];
      copy[payload.index] = payload.choice;
      return copy;
    }
    case NEW_ROUND: {
      return initSelections();
    }
    default:
      return state;
  }
}

export const initMatch = () => ({
  [ROUND_STATE.WIN]: 0,
  [ROUND_STATE.LOSE]: 0,
  [ROUND_STATE.TIE]: 0,
});

export function match(state = initMatch(), { type, payload }) {
  switch(type) {
    case TALLY_ROUND: 
      return {
        ...state,
        [payload]: state[payload] + 1
      };
    default:
      return state;
  }
}