
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