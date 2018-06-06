import { 
  fruits, 
  FRUITS_LOAD, 
  FRUIT_ADD, 
  FRUIT_REMOVE,
  FRUIT_UPDATE } from './reducers';

it('has a default value of empty array', () => {
  const state = fruits(undefined, {});
  expect(state).toEqual([]);
});

const mango = {
  name: 'mango',
  color: 'orange'
};

const banana = {
  name: 'banana',
  color: 'yellow'
};

it('loads fruits', () => {
  const state = fruits([], { type: FRUITS_LOAD, payload: [mango, banana] });
  expect(state).toEqual([mango, banana]);
});

it('add a fruit', () => {
  const prevState = [];
  const state = fruits(prevState, { type: FRUIT_ADD, payload: mango });
  expect(state).toEqual([mango]);
  expect(state).not.toBe(prevState);
});

it('updates a fruit', () => {
  const state = fruits(
    [{ id: 1, name: 'mango', color: 'orange' }], 
    { 
      type: FRUIT_UPDATE, 
      payload: { id: 1, name: 'mango', color: 'sunset' }
    }
  );
  expect(state).toEqual([{ id: 1, name: 'mango', color: 'sunset' }]);
});

it('removes a fruit', () => {
  const state = fruits([mango, banana], { type: FRUIT_REMOVE, payload: mango });
  expect(state).toEqual([banana]);
});