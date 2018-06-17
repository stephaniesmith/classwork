export const USER_CHOOSE_PLAYER = 'USER_CHOOSE_PLAYER';
export const USER_ATTACKED = 'USER_ATTACKED';
export const COMPUTER_CHOOSE_PLAYER = 'COMPUTER_CHOOSE_PLAYER';
export const COMPUTER_ATTACKED = 'COMPUTER_ATTACKED';


function getPlayerHpReducer(CHOSE_ACTION, ATTACK_ACTION) {
  return function playerHp(state = 0, { type, payload }) {
    switch(type) {
      case CHOSE_ACTION:
        return payload.hp;
      case ATTACK_ACTION:
        return state - payload;
      default: 
        return state;
    }
  };
}

export const userHp = getPlayerHpReducer(USER_CHOOSE_PLAYER, USER_ATTACKED);
export const computerKp = getPlayerHpReducer(COMPUTER_CHOOSE_PLAYER, COMPUTER_ATTACKED);
