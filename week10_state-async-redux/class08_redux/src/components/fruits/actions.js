import { FRUITS_LOAD, FRUIT_ADD, FRUIT_UPDATE, FRUIT_REMOVE } from './reducers';
import shortid from 'shortid';

const fruits = [
  { name: 'banana', color: 'yellow' },
  { name: 'orange', color: 'orange' },
  { name: 'apple', color: 'red' },
];

export const loadFruits = () => ({
  type: FRUITS_LOAD,
  payload: fruits
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