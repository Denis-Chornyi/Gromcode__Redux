import { ADD_USER, REMOVE_USER } from './user.actions.js';
const initialState = {
  users: null
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        users: state.users.concat(action.payload.userData)
      };
    }
    case REMOVE_USER: {
      const newList = state.users.filter(user => user.id !== action.payload.userId);
      return {
        ...state,
        users: newList
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
