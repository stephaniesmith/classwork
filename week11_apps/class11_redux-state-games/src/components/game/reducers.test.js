import { 
  selections, SELECTION, NEW_ROUND,
  match, initMatch, getMatch, TALLY_ROUND,
  getSelections, getRoundState, ROUND_STATE,
  getPlayerSelection } from './reducers';

describe('selections reducer', () => {

  it('has empty array for initial state', () => {
    const state = selections(undefined, {});
    expect(state).toEqual([]);
  });

  it('records player selection', () => {
    let state = selections([], { 
      type: SELECTION, 
      payload: { choice: 'rock', index: 0 }
    });

    expect(state).toEqual(['rock']);

    state = selections(state, { 
      type: SELECTION, 
      payload: { choice: 'paper', index: 1 }
    });

    expect(state).toEqual(['rock', 'paper']);
  });

  it('resets to empty array on new round', () => {
    const state = selections(['rock', 'paper'], { type: NEW_ROUND });
    expect(state).toEqual([]);
  });

  describe('selectors', () => {
    it('gets selections', () => {
      const selections = ['rock', 'paper'];
      const got = getSelections({ selections });
      expect(got).toBe(selections);
    });

    it('gets match', () => {
      const match = initMatch();
      const got = getMatch({ match });
      expect(got).toBe(match);
    });

    const testRoundState = (selections, expected) => {
      expect(getRoundState({ selections })).toBe(expected);
    };

    it('gets playing round state', () => {
      testRoundState([], ROUND_STATE.PLAYING);
    });
    
    it('gets tie round state', () => {
      testRoundState(['rock', 'rock'], ROUND_STATE.TIE);
    });

    it('gets win round state', () => {
      testRoundState(['rock', 'scissors'], ROUND_STATE.WIN);
      testRoundState(['scissors', 'paper'], ROUND_STATE.WIN);
      testRoundState(['paper', 'rock'], ROUND_STATE.WIN);
    });

    it('gets loss round state', () => {
      testRoundState(['scissors', 'rock'], ROUND_STATE.LOSE);
      testRoundState(['paper', 'scissors'], ROUND_STATE.LOSE);
      testRoundState(['rock', 'paper'], ROUND_STATE.LOSE);
    });

    it('gets player selection', () => {
      const state = { selections: ['rock', 'paper'] };
      expect(getPlayerSelection(0, state)).toBe('rock');
      expect(getPlayerSelection(1, state)).toBe('paper');
    });
  });
});

describe('match', () => {

  it('initializes to zero count stats', () => {
    const state = match(undefined, {});
    expect(state).toEqual(initMatch());
  });

  it('increments on round tally', () => {
    const state = match(initMatch(), { 
      type: TALLY_ROUND,
      payload: ROUND_STATE.WIN
    });
    const expected = initMatch();
    expected[ROUND_STATE.WIN] = 1;

    expect(state).toEqual(expected);
  });
});

