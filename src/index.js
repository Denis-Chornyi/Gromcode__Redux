import { store } from './store.js';
import { addUser, removeUser } from './user.actions.js';
import { addProduct, removeProduct } from './cart.actions.js';
import { setLanguage } from './language.actions.js';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'Bob' }));
store.dispatch(removeUser(2));
store.dispatch(addProduct({ id: 1, name: 'milk' }));
store.dispatch(addProduct({ id: 2, name: 'meat' }));
store.dispatch(removeProduct(1));
store.dispatch(setLanguage());
