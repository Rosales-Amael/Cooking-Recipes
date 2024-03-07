export const CHANGE_REGISTER_FIRSTNAME = 'CHANGE_REGISTER_FIRSTNAME';
export const CHANGE_REGISTER_EMAIL = 'CHANGE_REGISTER_EMAIL';
export const CHANGE_REGISTER_PASSWORD = 'CHANGE_REGISTER_PASSWORD';
export const CHANGE_REGISTER_CONFIRM_PASSWORD =
  'CHANGE_REGISTER_CONFIRM_PASSWORD';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_CHANGE_ERRORS = 'REGISTER_CHANGE_ERRORS';
export const REGISTER_CHANGE_TOAST_MESSAGE = 'REGISTER_CHANGE_TOAST_MESSAGE';
export const REGISTER_CHANGE_STATUS = 'REGISTER_CHANGE_STATUS';

export const changeRegisterFirstname = (newValue) => ({
  type: CHANGE_REGISTER_FIRSTNAME,
  newValue,
});

export const changeRegisterEmail = (newValue) => ({
  type: CHANGE_REGISTER_EMAIL,
  newValue,
});

export const changeRegisterPassword = (newValue) => ({
  type: CHANGE_REGISTER_PASSWORD,
  newValue,
});

export const changeRegisterConfirmPassword = (newValue) => ({
  type: CHANGE_REGISTER_CONFIRM_PASSWORD,
  newValue,
});

export const registerRequest = (history) => ({
  type: REGISTER_REQUEST,
  history,
});

export const registerChangeErrors = (newValue) => ({
  type: REGISTER_CHANGE_ERRORS,
  newValue,
});

export const registerChangeToastMessage = (newValue) => ({
  type: REGISTER_CHANGE_TOAST_MESSAGE,
  newValue,
});

export const registerChangeStatus = (newValue) => ({
  type: REGISTER_CHANGE_STATUS,
  newValue,
});
