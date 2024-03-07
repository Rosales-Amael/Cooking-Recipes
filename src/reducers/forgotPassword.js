import {
  FORGOT_PASSWORD_CHANGE_EMAIL,
  FORGOT_PASSWORD_CHANGE_ERRORS,
  FORGOT_PASSWORD_CHANGE_STATUS,
  FORGOT_PASSWORD_CHANGE_TOAST,
} from '../actions/forgotPassword';

const initialState = {
  email: '',
  toastMessage: '',
  status: 0,
  errors: [],
};

const forgotPasswordReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FORGOT_PASSWORD_CHANGE_EMAIL: {
      return {
        ...state,
        email: action.newValue,
      };
    }

    case FORGOT_PASSWORD_CHANGE_TOAST: {
      return {
        ...state,
        toastMessage: action.newValue,
      };
    }

    case FORGOT_PASSWORD_CHANGE_STATUS: {
      return {
        ...state,
        status: action.newValue,
      };
    }

    case FORGOT_PASSWORD_CHANGE_ERRORS: {
      return {
        ...state,
        errors: action.newValue,
      };
    }
    default:
      return state;
  }
};

export default forgotPasswordReducer;
