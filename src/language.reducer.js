import { EN, ES, JP } from './language.actions.js';

const initialState = 'en';

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case EN:
      return 'en';
    case ES:
      return 'es';
    case JP:
      return 'jp';
    default:
      return state;
  }
};
