import { AVATAR_CHANGE_STATUS, AVATAR_CHANGE_TOAST } from '../actions/avatar';

const initialState = {
  toastMesssage: '',
  status: 0,
};

const avatarReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case AVATAR_CHANGE_TOAST: {
      return {
        ...state,
        toastMesssage: action.newValue,
      };
    }

    case AVATAR_CHANGE_STATUS: {
      return {
        ...state,
        status: action.newValue,
      };
    }
    default:
      return state;
  }
};

export default avatarReducer;
