export const SCORES_LOAD = 'SCORES_LOAD';
export const SCORE_ADD = 'SCORE_ADD';
export const SCORE_REMOVE = 'SCORE_REMOVE';
export const LOADING_START = 'LOADING_START';
export const LOADING_END = 'LOADING_END';
export const ERROR = 'ERROR';

export function loading(state = false, { type }) {
  //track loading state
  switch(type) {
    // respond to start and end
    default:
      return state;
  }
}

export function error(state = null, { type, payload }) {
  
}