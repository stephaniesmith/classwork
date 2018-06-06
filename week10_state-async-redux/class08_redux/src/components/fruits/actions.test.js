import { FRUITS_LOAD, FRUIT_ADD, FRUIT_UPDATE, FRUIT_REMOVE } from './reducers';
import { loadFruits, addFruit, updateFruit, removeFruit } from './actions';

it('creates a load action', () => {
  const { type, payload } = loadFruits();
  expect(type).toBe(FRUITS_LOAD);
  expect(payload.length).toBe(3);
});

it('create an add action', () => {
  const fruit = { name: 'banana', color: 'yellow' };

  const { type, payload } = addFruit(fruit);
  expect(type).toBe(FRUIT_ADD);
  const { name, color, id, timestamp } = payload;
  expect(name).toBe(fruit.name);
  expect(color).toBe(fruit.color);
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});

it('create an update action', () => {
  const banana = { name: 'banana', color: 'yellow' };
  const action = updateFruit(banana);
  expect(action).toEqual({
    type: FRUIT_UPDATE,
    payload: banana
  });
});

it('create an remove action', () => {
  const fruit = { name: 'banana', color: 'yellow' };

  const action = removeFruit(fruit);
  expect(action).toEqual({
    type: FRUIT_REMOVE,
    payload: fruit
  });
});