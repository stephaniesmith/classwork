export const FRUITS_LOAD = 'FRUITS_LOAD';
export const FRUIT_ADD = 'FRUIT_ADD';
export const FRUIT_UPDATE = 'FRUIT_UPDATE';
export const FRUIT_REMOVE = 'FRUIT_REMOVE';

export function fruits(state = [], { type, payload }) {
  switch(type) {
    case FRUITS_LOAD:
      return payload;
    case FRUIT_ADD:
      return [...state, payload];
    case FRUIT_UPDATE:
      return state.map(fruit => fruit.id === payload.id ? payload : fruit);
    case FRUIT_REMOVE:
      return state.filter(fruit => fruit !== payload);
    default:
      return state;
  }
}
