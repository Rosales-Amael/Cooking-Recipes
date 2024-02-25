export const CHANGE_REGISTER_EMAIL = 'CHANGE_REGISTER_EMAIL';
export const CHANGE_REGISTER_FIRSTNAME = 'CHANGE_REGISTER_FIRSTNAME';
export const CHANGE_REGISTER_LASTNAME = 'CHANGE_REGISTER_LASTNAME';
export const CHANGE_REGISTER_PASSWORD = 'CHANGE_REGISTER_PASSWORD';

export const changeRegisterEmail = (newValue) => ({
  type: CHANGE_REGISTER_EMAIL,
  newValue,
});

export const changeRegisterFirstname = (newValue) => ({
  type: CHANGE_REGISTER_FIRSTNAME,
  newValue,
});

export const changeRegisterLastname = (newValue) => ({
  type: CHANGE_REGISTER_LASTNAME,
  newValue,
});

export const changeRegisterPassword = (newValue) => ({
  type: CHANGE_REGISTER_PASSWORD,
  newValue,
});
