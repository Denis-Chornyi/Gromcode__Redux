import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

const counterReducer = (store = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return store + 1;
    case DECREMENT:
      return store - 1;
    default:
      return store;
  }
};

const store = createStore(counterReducer);

export default store;
