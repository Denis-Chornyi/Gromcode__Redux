const babelUrl = 'https://api.github.com/users';

export const getUserData = userName =>
  fetch(`${babelUrl}/${userName}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
