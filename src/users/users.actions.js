export const ADD_USER = 'USER/ADD_USER';
export const SET_PAGE = 'USER/SET_PAGE';

export const addUser = userData => {
  return {
    type: ADD_USER,
    payload: {
      userData
    }
  };
};

export const setPage = page => {
  return {
    type: SET_PAGE,
    payload: {
      page
    }
  };
};
