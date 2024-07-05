import { users } from './userList.js';
import { ADD_USER } from './users.actions.js';

const initialState = {
  usersList: users,
  currentPage: 0,
  itemsPerPage: 3
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData)
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
