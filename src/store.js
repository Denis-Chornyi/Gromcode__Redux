import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { taskReduser } from './tasks/tasks.reducer';

// const logger = store => next => action => {
//   console.group(action.type);
//   console.info('dispatching', action);
//   const result = next(action);
//   console.log('new state', store.getState());
//   console.groupEnd();
//   return result;
// };

const reducer = combineReducers({
  tasks: taskReduser
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
