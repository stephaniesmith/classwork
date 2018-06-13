import { getAllScores, deleteScore } from '../../services/api';
import { SCORES_LOAD, SCORE_REMOVE } from './reducers';

export function loadScores() {
  return {
    type: SCORES_LOAD,
    payload: getAllScores()
  };
}

export function removeScore(scoreId) {
  return {
    type: SCORE_REMOVE,
    payload: deleteScore(scoreId)
      .then(deleteId => ({ deleteId, scoreId }))
  };
}