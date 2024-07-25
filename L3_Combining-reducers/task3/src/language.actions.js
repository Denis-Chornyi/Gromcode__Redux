export const EN = 'LANGUAGE/EN';
export const ES = 'LANGUAGE/ES';
export const JP = 'LANGUAGE/JP';

export const setLanguage = language => {
  return {
    type: language === 'en' ? EN : language === 'es' ? ES : JP
  };
};
