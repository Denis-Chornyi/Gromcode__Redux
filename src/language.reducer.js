import { EN, ES, JP } from './language.actions.js';

export const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case EN:
      return (state = 'en');
    case ES:
      return (state = 'es');
    case JP:
      return (state = 'jp');
    default:
      return state;
  }
};
