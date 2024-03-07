export const FORGOT_PASSWORD_CHANGE_EMAIL = 'FORGOT_PASSWORD_CHANGE_EMAIL';
export const FORGOT_PASSWORD_CHANGE_TOAST = 'FORGOT_PASSWORD_CHANGE_TOAST';
export const FORGOT_PASSWORD_CHANGE_STATUS = 'FORGOT_PASSWORD_CHANGE_STATUS';
export const FORGOT_PASSWORD_CHANGE_ERRORS = 'FORGOT_PASSWORD_CHANGE_ERRORS';
export const FORGOT_PASSWORD_SEND_EMAIL = 'FORGOT_PASSWORD_SEND_EMAIL';

export const forgotPasswordChangeEmail = (newValue) => ({
  type: FORGOT_PASSWORD_CHANGE_EMAIL,
  newValue,
});

export const forgotPasswordChangeToast = (newValue) => ({
  type: FORGOT_PASSWORD_CHANGE_TOAST,
  newValue,
});

export const forgotPasswordChangeStatus = (newValue) => ({
  type: FORGOT_PASSWORD_CHANGE_STATUS,
  newValue,
});

export const forgotPasswordChangeErrors = (newValue) => ({
  type: FORGOT_PASSWORD_CHANGE_ERRORS,
  newValue,
});

export const forgotPasswordSendEmail = () => ({
  type: FORGOT_PASSWORD_SEND_EMAIL,
});
