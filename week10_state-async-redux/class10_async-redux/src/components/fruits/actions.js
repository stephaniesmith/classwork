import { 
  FRUITS_LOAD, 
  FRUIT_ADD, 
  FRUIT_UPDATE, 
  FRUIT_REMOVE,
  COMMENT_ADD } from './reducers';

import {
  ERROR,
  LOADING_START,
  LOADING_END
} from '../app/reducers';

import { 
  getFruits,
  postFruit,
  putFruit,
  deleteFruit,
  postComment
} from '../../services/api';


export const loadFruits = () => {

  return dispatch => {
    dispatch({ type: LOADING_START });

    getFruits()
      .then(
        fruits => {
          dispatch({
            type: FRUITS_LOAD,
            payload: fruits
          });
        },
        err => {
          dispatch({
            type: ERROR,
            payload: err
          });
        })
      .then(() => {
        dispatch({ type: LOADING_END });
      });
  };
};

export const addFruit = fruit => dispatch => {
  postFruit(fruit)
    .then(
      saved => {
        dispatch({
          type: FRUIT_ADD,
          payload: saved
        });
      },
      err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
};

export const updateFruit = fruit => dispatch => {
  putFruit(fruit)
    .then(updated => {
      dispatch({
        type: FRUIT_UPDATE,
        payload: updated
      });
    });
};

export const removeFruit = fruit => dispatch => {
  deleteFruit(fruit.id)
    .then(() => {
      dispatch({
        type: FRUIT_REMOVE,
        payload: fruit
      });
    });
};

export const addComment = (fruitId, comment) => dispatch => {
  postComment(fruitId, comment)
    .then(saved => {
      dispatch({
        type: COMMENT_ADD,
        payload: {
          fruitId,
          comment: saved
        }
      });
    });

};
