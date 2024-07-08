export const SET_FILTER_TEXT = 'USERS/SET_FILTER_TEXT';

export const setFilterText = text => {
  return {
    type: SET_FILTER_TEXT,
    payload: {
      text
    }
  };
};
