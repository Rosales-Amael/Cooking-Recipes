export const USER_GET_USER = 'USER_GET_USER';
export const USER_SET_USER = 'USER_SET_USER';
export const USER_DELETE_REQUEST = 'USER_DELETE_REQUEST';
export const USER_CHANGE_DELETE_TOAST_MESSAGE =
  'USER_CHANGE_DELETE_TOAST_MESSAGE';
export const USER_CHANGE_DELETE_STATUS = 'USER_CHANGE_DELETE_STATUS';
export const USER_CHANGE_NAME = 'USER_CHANGE_NAME';
export const USER_CHANGE_EMAIL = 'USER_CHANGE_EMAIL';
export const USER_CHANGE_EDIT_TOAST_MESSAGE = 'USER_CHANGE_EDIT_TOAST_MESSAGE';
export const USER_CHANGE_EDIT_STATUS = 'USER_CHANGE_EDIT_STATUS';
export const USER_EDIT_REQUEST = 'USER_EDIT_REQUEST';

export const userGetUser = (history) => ({
  type: USER_GET_USER,
  history,
});

export const userSetUser = (newValue) => ({
  type: USER_SET_USER,
  newValue,
});

export const userDeleteRequest = (history) => ({
  type: USER_DELETE_REQUEST,
  history,
});

export const userChangeDeleteToastMessage = (newValue) => ({
  type: USER_CHANGE_DELETE_TOAST_MESSAGE,
  newValue,
});

export const userChangeDeleteStatus = (newValue) => ({
  type: USER_CHANGE_DELETE_STATUS,
  newValue,
});

export const userChangeName = (newValue) => ({
  type: USER_CHANGE_NAME,
  newValue,
});

export const userChangeEmail = (newValue) => ({
  type: USER_CHANGE_EMAIL,
  newValue,
});

export const userChangeEditToastMessage = (newValue) => ({
  type: USER_CHANGE_EDIT_TOAST_MESSAGE,
  newValue,
});

export const userChangeEditStatus = (newValue) => ({
  type: USER_CHANGE_EDIT_STATUS,
  newValue,
});

export const userEditRequest = () => ({
  type: USER_EDIT_REQUEST,
});
