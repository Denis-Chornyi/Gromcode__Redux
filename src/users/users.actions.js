import { getUserData } from './users.gateway';

export const SHOW_SPINER = 'SHOW_SPINER';
export const USER_DATA_RECIEVED = 'USER_DATA_RECIEVED';

export const showSpinner = () => {
  return {
    type: 'SHOW_SPINER'
  };
};

export const userDataRecieved = userData => {
  return {
    type: USER_DATA_RECIEVED,
    payload: {
      userData
    }
  };
};

export const fetchUserData = userName => {
  return function (dispatch) {
    dispatch(showSpinner());
    getUserData(userName).then(userData => {
      dispatch(userDataRecieved(userData));
    });
  };
};
