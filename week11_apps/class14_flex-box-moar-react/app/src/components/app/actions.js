import { PETS_LOAD, PET_LOAD } from './reducers';
import { getAllPets, getPet } from '../../services/api';

export const loadPets = () => ({
  type: PETS_LOAD,
  payload: getAllPets()
});

export const loadPet = (id) => ({
  type: PET_LOAD,
  payload: getPet(id)
});

export const clearPet = () => ({
  type: PET_LOAD,
  payload: null
});