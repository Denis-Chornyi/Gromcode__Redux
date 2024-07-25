import { TASK_LIST_RECEIVED } from './tasks.actions';

const initialState = {
  tasksList: []
};

export const taskReduser = (state = initialState, action) => {
  switch (action.type) {
    case TASK_LIST_RECEIVED: {
      return {
        ...state,
        tasksList: action.payload
      };
    }
    default:
      return state;
  }
};
