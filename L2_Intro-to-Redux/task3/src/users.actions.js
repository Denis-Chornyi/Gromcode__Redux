export const ADD_USER = 'USER/ADD';
export const DELETE_USER = 'USER/DELETE';

export const addUser = user => ({
  type: ADD_USER,
  payload: user
});

export const deleteUser = userId => ({
  type: DELETE_USER,
  payload: userId
});
