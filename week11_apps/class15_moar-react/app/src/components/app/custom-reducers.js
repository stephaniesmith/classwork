export const CHOOSE_PLAYER = 'CHOOSE_PLAYER';
export const PLAYER_ATTACKED = 'PLAYER_ATTACKED';

const userHp = getPlayerHpReducer();
const computerHp = getPlayerHpReducer();
const hpReducers = [userHp, computerHp];

export function playerHp(state = [0, 0], action) {
  const { type, payload } = action;
  if(type !== CHOOSE_PLAYER || type !== PLAYER_ATTACKED) return state;

  const { index } = payload;
  const reducer = hpReducers[index];
  const currentHp = state[index];
  const newHp = reducer(currentHp, action);
  if(currentHp === newHp) return state;
  
  const copy = state.slice();
  copy[index] = newHp;
  return copy;
}

function getPlayerHpReducer() {
  return function playerHp(state = 0, { type, payload }) {
    switch(type) {
      case CHOOSE_PLAYER:
        return payload.hp;
      case PLAYER_ATTACKED:
        return state - payload;
      default: 
        return state;
    }
  };
}