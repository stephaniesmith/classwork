import { 
  fruits,
  commentsByFruit, 
  getCommentsByFruit,
  FRUITS_LOAD, 
  FRUIT_ADD, 
  FRUIT_REMOVE,
  FRUIT_UPDATE,
  COMMENT_ADD } from './reducers';

describe('fruits reducer', () => {

  const mango = {
    name: 'mango',
    color: 'orange'
  };
  
  const banana = {
    name: 'banana',
    color: 'yellow'
  };
  
  it('has a default value of empty array', () => {
    const state = fruits(undefined, {});
    expect(state).toEqual([]);
  });

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

});

describe('commentsByFruit reducer', () => {

  it('has a default value of empty object', () => {
    const state = commentsByFruit(undefined, {});
    expect(state).toEqual({});
  });

  it('adds an entry on fruit add', () => {
    const state = commentsByFruit({}, { type: FRUIT_ADD, payload: { id: 123 } });
    expect(state).toEqual({ 123: [] });
  });

  it('removes an entry on fruit remove', () => {
    const state = commentsByFruit({ 123: [], 456: [] }, { type: FRUIT_REMOVE, payload: { id: 123 } });
    expect(state).toEqual({ 456: [] });
  });

  it('creates comments for all loaded fruits', () => {
    const state = commentsByFruit({}, { 
      type: FRUITS_LOAD, 
      payload: [{ 
        id: 123, 
        comments: [
          { text: 'one' }, 
          { text: 'two' }
        ] 
      }, {
        id: 456,
        comments: []
      }] 
    });
    expect(state).toEqual({ 
      123: [{ text: 'one' }, { text: 'two' }],
      456: []
    });
  });

  it('adds a comment to a fruit', () => {
    const state = commentsByFruit({ 123: [{ text: 'one' }] }, {
      type: COMMENT_ADD,
      payload: {
        fruitId: 123,
        comment: { text: 'two' }
      }
    });

    expect(state).toEqual({ 123: [{ text: 'one' }, { text: 'two' }] });
  });

});

describe('selectors', () => {

  it('gets comments for a fruit id', () => {
    const comments = [{ text: 'one' }];
    const state = {
      commentsByFruit: {
        123: comments
      }
    };
    const selected = getCommentsByFruit(123, state);
    expect(selected).toBe(comments);
  });
});
