import { FRUITS_LOAD, FRUIT_ADD, FRUIT_UPDATE, FRUIT_REMOVE } from './reducers';
import shortid from 'shortid';


const fruits = () => [
  addFruit({ name: 'banana', color: 'yellow' }).payload,
  addFruit({ name: 'orange', color: 'orange' }).payload,
  addFruit({ name: 'apple', color: 'red' }).payload,
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