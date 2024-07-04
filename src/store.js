import { createStore, combineReducers } from 'redux';
import { languageReducer } from './language.reducer.js';
import usersReducer from './user.reducer.js';
import cartReducer from './cart.reducer.js';

const appReducer = combineReducers({
  language: languageReducer,
  users: usersReducer,
  cart: cartReducer
});

export const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
