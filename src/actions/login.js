export const CHANGE_LOGIN_EMAIL = 'CHANGE_LOGIN_EMAIL';
export const CHANGE_LOGIN_PASSWORD = 'CHANGE_LOGIN_PASSWORD';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_CHANGE_ERRORS = 'LOGIN_CHANGE_ERRORS';

export const changeLoginEmail = (newValue) => ({
  type: CHANGE_LOGIN_EMAIL,
  newValue,
});

export const changeLoginPassword = (newValue) => ({
  type: CHANGE_LOGIN_PASSWORD,
  newValue,
});

export const loginRequest = (history) => ({
  type: LOGIN_REQUEST,
  history,
});

export const loginChangeError = (newValue) => ({
  type: LOGIN_CHANGE_ERRORS,
  newValue,
});
