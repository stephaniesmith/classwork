import { get, post } from './request';

const URL = '/api';
const SCORES_URL = `${URL}/scores`;

export const getAll =  () => get(SCORES_URL);
export const save = score => post(SCORES_URL, score);