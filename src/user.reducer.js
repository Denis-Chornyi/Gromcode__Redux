import { SET_USER, REMOVE_USER } from './user.actions.js';

const initialState = {
  user: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: [...state.user, action.payload]
      };
    case REMOVE_USER:
      return {
        ...state,
        user: []
      };
    default:
      return state;
  }
};

export default userReducer;
