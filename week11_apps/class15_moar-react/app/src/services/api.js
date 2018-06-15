import { get } from './request';

const URL = '/api';
const PETS_URL = `${URL}/pets`;

export const getAllPets = () => get(PETS_URL);
export const getPet = id => get(`${PETS_URL}/${id}`);