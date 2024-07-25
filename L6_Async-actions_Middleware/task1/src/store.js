import { createStore, applyMiddleware, compose } from 'redux';
import counterReducer from './components/counter.reducer';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('new state', store.getState());
  console.groupEnd();

  return result;
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(counterReducer, composeEnhancer(applyMiddleware(logger)));

export default store;
