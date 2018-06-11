import { makeSelection } from './actions';
import { SELECTION } from './reducers';

describe('makeSelection action', () => {
  it('dispatches player choice and random computer choice', () => {
    const thunk = makeSelection('rock');
    const dispatch = jest.fn();
    thunk(dispatch);

    const { calls } = dispatch.mock;
    expect(calls.length).toBe(2);
    expect(calls[0][0]).toEqual({
      type: SELECTION,
      payload: { index: 0, choice: 'rock' }
    });
    expect(calls[1][0]).toEqual({
      type: SELECTION,
      payload: { 
        index: 1, 
        choice: expect.stringMatching(/^(rock|paper|scissors)$/)
      }
    });


  });
});