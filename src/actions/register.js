export const CHANGE_REGISTER_FIRSTNAME = 'CHANGE_REGISTER_FIRSTNAME';
export const CHANGE_REGISTER_EMAIL = 'CHANGE_REGISTER_EMAIL';
export const CHANGE_REGISTER_PASSWORD = 'CHANGE_REGISTER_PASSWORD';
export const CHANGE_REGISTER_CONFIRM_PASSWORD =
  'CHANGE_REGISTER_CONFIRM_PASSWORD';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERRORS = 'REGISTER_ERRORS';

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

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerErrors = (newValue) => ({
  type: REGISTER_ERRORS,
  newValue,
});
