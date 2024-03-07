export const RESET_PASSWORD_CHANGE_TOKEN = 'RESET_PASSWORD_CHANGE_TOKEN';
export const RESET_PASSWORD_CHANGE_EMAIL = 'RESET_PASSWORD_CHANGE_EMAIL';
export const RESET_PASSWORD_CHANGE_PASSWORD = 'RESET_PASSWORD_CHANGE_PASSWORD';
export const RESET_PASSWORD_CHANGE_PASSWORD_CONFIRMATION =
  'RESET_PASSWORD_CHANGE_PASSWORD_CONFIRMATION';
export const RESET_PASSWORD_CHANGE_TOAST_MESSAGE =
  'RESET_PASSWORD_CHANGE_TOAST_MESSAGE';
export const RESET_PASSWORD_CHANGE_STATUS = 'RESET_PASSWORD_CHANGE_STATUS';
export const RESET_PASSWORD_CHANGE_ERRORS = 'RESET_PASSWORD_CHANGE_ERRORS';
export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';

export const resetPasswordChangeToken = (newValue) => ({
  type: RESET_PASSWORD_CHANGE_TOKEN,
  newValue,
});

export const resetPasswordChangeEmail = (newValue) => ({
  type: RESET_PASSWORD_CHANGE_EMAIL,
  newValue,
});

export const resetPasswordChangePassword = (newValue) => ({
  type: RESET_PASSWORD_CHANGE_PASSWORD,
  newValue,
});

export const resetPasswordChangePasswordConfirmation = (newValue) => ({
  type: RESET_PASSWORD_CHANGE_PASSWORD_CONFIRMATION,
  newValue,
});

export const resetPasswordChangeToastMessage = (newValue) => ({
  type: RESET_PASSWORD_CHANGE_TOAST_MESSAGE,
  newValue,
});

export const resetPasswordChangeStatus = (newValue) => ({
  type: RESET_PASSWORD_CHANGE_STATUS,
  newValue,
});

export const resetPasswordChangeErrors = (newValue) => ({
  type: RESET_PASSWORD_CHANGE_ERRORS,
  newValue,
});

export const resetPasswordRequest = (history) => ({
  type: RESET_PASSWORD_REQUEST,
  history,
});
