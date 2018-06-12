import { getAll, save } from '../../services/api';
import { LOADING_START, LOADING_END, ERROR, SCORES_LOAD, SCORE_ADD } from './reducers';
// import { LOADING_START, LOADING_END, ERROR } from './reducers';

export const loadScores = () => ({
  type: SCORES_LOAD,
  payload: getAll()
});

export const addScore = score => ({
  type: SCORE_ADD,
  payload: save(score)
});

export const doSomething = () => {
  return (dispatch, getState) => {
    const { condition } = getState();
    if(condition) {
      dispatch({
        type: WHATEVER,
        payload: somePromise()
      });
    }
  };
}

export const remove = (categoryId, expenseId) =>  ({
  type: SCORE_ADD,
  payload: remove(categoryId, expenseId)
    .then(() => {
      return {
        categoryId,
        id: expenseId
      };
    })
});