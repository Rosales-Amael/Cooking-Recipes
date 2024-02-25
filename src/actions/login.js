export const CHANGE_LOGIN_EMAIL = 'CHANGE_LOGIN_EMAIL';
export const CHANGE_LOGIN_PASSWORD = 'CHANGE_LOGIN_PASSWORD';

export const changeLoginEmail = (newValue) => ({
  type: CHANGE_LOGIN_EMAIL,
  newValue,
});

export const changeLoginPassword = (newValue) => ({
  type: CHANGE_LOGIN_PASSWORD,
  newValue,
});
