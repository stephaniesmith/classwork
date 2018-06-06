import { createStore, combineReducers } from 'redux';
import { fruits } from './components/fruits/reducers';

const rootReducer = combineReducers({
  fruits
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;