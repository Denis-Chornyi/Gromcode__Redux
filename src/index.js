import store from './store.js';
import { setUser, removeUser } from './user.actions.js';
import { addProduct, removeProduct } from './cart.actions.js';
import { setLanguage } from './language.actions.js';

store.subscribe(() => console.log(store.getState()));

// store.dispatch(setUser({ name: 'Halk' }));

// store.dispatch(removeUser());

store.dispatch(addProduct({ id: 1, name: 'milk' }));
store.dispatch(addProduct({ id: 2, name: 'meat' }));
store.dispatch(removeProduct(1));
store.dispatch(setLanguage());
