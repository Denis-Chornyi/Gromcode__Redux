import { createStore } from 'redux';
import counterReducer from './components/counter.reducer';

const store = createStore(counterReducer);

export default store;
