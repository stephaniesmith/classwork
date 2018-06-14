export const PETS_LOAD = 'PETS_LOAD';
export const PET_LOAD = 'PET_LOAD';
export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const ERROR = 'ERROR';

export const getPets = state => state.pets;
export const getPet = state => state.pet;

export function pets(state = [], { type, payload }) {
  switch(type) {
    case PETS_LOAD:
      return payload;
    default: 
      return state;
  }
}

export function pet(state = null, { type, payload }) {
  switch(type) {
    case PET_LOAD:
      return payload;
    default: 
      return state;
  }
}