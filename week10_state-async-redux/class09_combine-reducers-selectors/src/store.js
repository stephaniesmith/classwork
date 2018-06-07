import { createStore, combineReducers } from 'redux';
import { fruits } from './components/fruits/reducers';
// import { player } from './components/player/reducers';

const rootReducer = combineReducers({
  fruits: fruits,
  // player: player
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;