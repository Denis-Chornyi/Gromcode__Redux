import { ADD_USER, SET_PAGE, GO_NEXT, GO_PREV } from './users.actions';

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
    case GO_NEXT:
      return {
        ...state,
        currentPage: state.currentPage + 1
      };
    case GO_PREV:
      return {
        ...state,
        currentPage: state.currentPage - 1
      };
    default:
      return state;
  }
};

export default usersReducer;
