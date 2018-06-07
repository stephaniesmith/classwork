import { createStore, combineReducers } from 'redux';
import { fruits, commentsByFruit } from './components/fruits/reducers';

const rootReducer = combineReducers({
  fruits,
  commentsByFruit
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;