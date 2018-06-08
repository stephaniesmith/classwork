import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { error, loading } from './components/app/reducers';
import { fruits, commentsByFruit } from './components/fruits/reducers';

const rootReducer = combineReducers({
  error,
  loading,
  fruits,
  commentsByFruit
});

const logger = () => next => action => {
  console.log('redux logger received action', action);
  const result = next(action);
  return result;
};

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      logger,
      thunk
    )
  )
);

export default store;