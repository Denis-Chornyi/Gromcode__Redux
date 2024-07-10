import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserInfo from './users/UserInfo';
import SearchFeild from './users/SearchFeild';

const App = () => {
  return (
    <Provider store={store}>
      <div className="page">
        <UserInfo />
        <SearchFeild />
      </div>
    </Provider>
  );
};

export default App;
