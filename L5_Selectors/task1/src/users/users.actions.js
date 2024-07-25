export const ADD_USER = 'USER/ADD_USER';
export const SET_PAGE = 'USER/SET_PAGE';
export const GO_NEXT = 'USER/GO_NEXT';
export const GO_PREV = 'USER/GO_PREV';

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

export const goNext = () => {
  return {
    type: GO_NEXT
  };
};

export const goPrev = () => {
  return {
    type: GO_PREV
  };
};
