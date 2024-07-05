import { SET_USER, REMOVE_USER } from './user.actions.js';

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case REMOVE_USER:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default userReducer;
