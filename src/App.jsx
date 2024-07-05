import React from 'react';
import { Provider } from 'react-redux';
import Users from './users/Users';
import store from './store';
import Counter from './counter/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <Users />
      {/* <Counter /> */}
    </Provider>
  );
};

export default App;
