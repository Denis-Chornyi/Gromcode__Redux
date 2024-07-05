import { ADD_USER, SET_PAGE } from './users.actions';

const initialState = {
  usersList: [],
  currentPage: 0
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData)
      };
    }
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload.page
      };
    default:
      return state;
  }
};

export default usersReducer;
