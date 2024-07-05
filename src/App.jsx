import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UsersListContainer from './users/UsersListContainer';

const App = () => {
  return (
    <Provider store={store}>
      <UsersListContainer />
    </Provider>
  );
};

export default App;
