export const USER_GET_USER = 'USER_GET_USER';
export const USER_SET_USER = 'USER_SET_USER';

export const userGetUser = (history) => ({
  type: USER_GET_USER,
  history,
});

export const userSetUser = (newValue) => ({
  type: USER_SET_USER,
  newValue,
});
