import { 
  FRUITS_LOAD, 
  FRUIT_ADD, 
  FRUIT_UPDATE, 
  FRUIT_REMOVE,
  COMMENT_ADD } from './reducers';
import shortid from 'shortid';


const fruits = () => [
  addFruit({ 
    name: 'banana', 
    color: 'yellow',
    comments: [
      { id: 123, text: 'yummy' }
    ]
  }).payload,
  addFruit({ name: 'orange', color: 'orange', comments: [] }).payload,
  addFruit({ name: 'apple', color: 'red', comments: [] }).payload,
];

export const loadFruits = () => ({
  type: FRUITS_LOAD,
  payload: fruits()
});

export const addFruit = fruit => {
  fruit.id = shortid.generate();
  fruit.timestamp = new Date();

  return {
    type: FRUIT_ADD,
    payload: fruit
  };
};

export const updateFruit = fruit => ({
  type: FRUIT_UPDATE,
  payload: fruit
});

export const removeFruit = fruit => ({
  type: FRUIT_REMOVE,
  payload: fruit
});

export const addComment = (fruitId, comment) => {
  comment.id = shortid.generate();
  comment.timestamp = new Date();
  // comment.fruitId = fruitId;

  return {
    type: COMMENT_ADD,
    payload: {
      fruitId,
      comment
    }
  };
};
