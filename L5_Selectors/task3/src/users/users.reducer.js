import { users } from './users';
import { SET_FILTER_TEXT } from './users.actions';

const initialState = {
  usersList: users,
  filterText: ''
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_TEXT: {
      return {
        ...state,
        filterText: action.payload.text
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
