import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter.reducer.js';
import usersReducer from './users.reducer.js';

const appReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer
});

export const store = createStore(appReducer);
