export const AVATAR_REQUEST = 'AVATAR_REQUEST';
export const AVATAR_CHANGE_TOAST = 'AVATAR_CHANGE_TOAST';
export const AVATAR_CHANGE_STATUS = 'AVATAR_CHANGE_STATUS';

export const avatarRequest = (newAvatar) => ({
  type: AVATAR_REQUEST,
  newAvatar,
});

export const avatarChangeToast = (newValue) => ({
  type: AVATAR_CHANGE_TOAST,
  newValue,
});

export const avatarChangeStatus = (newValue) => ({
  type: AVATAR_CHANGE_STATUS,
  newValue,
});
