import { makeSelection, newRound } from './actions';
import { SELECTION, NEW_ROUND, TALLY_ROUND } from './reducers';

describe('makeSelection action', () => {
  it('dispatches player choice and random computer choice', () => {
    const thunk = makeSelection('rock');
    const dispatch = jest.fn();
    const getState = () => ({ selections: ['rock', 'paper'] });
    thunk(dispatch, getState);

    const { calls } = dispatch.mock;
    expect(calls.length).toBe(3);
    
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

    expect(calls[2][0]).toEqual({
      type: TALLY_ROUND,
      payload: expect.stringMatching(/^(WIN|LOSE|TIE)$/)
    });
  });

  it('dispatches new round', () => {
    expect(newRound()).toEqual({ type: NEW_ROUND });
  });
});