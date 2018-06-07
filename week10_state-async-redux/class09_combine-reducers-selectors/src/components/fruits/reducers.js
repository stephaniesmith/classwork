export const FRUITS_LOAD = 'FRUITS_LOAD';
export const FRUIT_ADD = 'FRUIT_ADD';
export const FRUIT_UPDATE = 'FRUIT_UPDATE';
export const FRUIT_REMOVE = 'FRUIT_REMOVE';
export const COMMENT_ADD = 'COMMENT_ADD';

export const getFruits = state => state.fruits;
export const getComments = state => state.commentsByFruit;
export const getCommentsByFruit = (fruitId, state) => getComments(state)[fruitId];

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

export function commentsByFruit(state = {}, { type, payload }) {
  switch(type) {
    case FRUITS_LOAD:
      return payload.reduce((map, fruit) => {
        map[fruit.id] = fruit.comments;
        return map;
      }, {});
    case FRUIT_ADD:
      return {
        ...state,
        [payload.id]: []
      };
    case FRUIT_REMOVE: {
      const copy = { ...state };
      delete copy[payload.id];
      return copy;
    }
    case COMMENT_ADD: {
      return {
        ...state,
        [payload.fruitId]: [
          ...state[payload.fruitId],
          payload.comment
        ]
      };
    }
    default:
      return state;
  }
}
