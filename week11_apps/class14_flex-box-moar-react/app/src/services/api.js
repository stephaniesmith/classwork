import { get } from './request';

const URL = '/api';
const SCORES_URL = `${URL}/scores`;

export const getAllScores =  () => get(SCORES_URL);