import {
  RESET_PASSWORD_CHANGE_EMAIL,
  RESET_PASSWORD_CHANGE_ERRORS,
  RESET_PASSWORD_CHANGE_PASSWORD,
  RESET_PASSWORD_CHANGE_PASSWORD_CONFIRMATION,
  RESET_PASSWORD_CHANGE_STATUS,
  RESET_PASSWORD_CHANGE_TOAST_MESSAGE,
  RESET_PASSWORD_CHANGE_TOKEN,
} from '../actions/resetPassword';

const initialState = {
  token: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  toastMessage: '',
  status: 0,
  errors: [],
};

const resetPasswordReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_PASSWORD_CHANGE_TOKEN: {
      return {
        ...state,
        token: action.newValue,
      };
    }

    case RESET_PASSWORD_CHANGE_EMAIL: {
      return {
        ...state,
        email: action.newValue,
      };
    }

    case RESET_PASSWORD_CHANGE_PASSWORD: {
      return {
        ...state,
        password: action.newValue,
      };
    }

    case RESET_PASSWORD_CHANGE_PASSWORD_CONFIRMATION: {
      return {
        ...state,
        passwordConfirmation: action.newValue,
      };
    }

    case RESET_PASSWORD_CHANGE_TOAST_MESSAGE: {
      return {
        ...state,
        toastMessage: action.newValue,
      };
    }

    case RESET_PASSWORD_CHANGE_STATUS: {
      return {
        ...state,
        status: action.newValue,
      };
    }

    case RESET_PASSWORD_CHANGE_ERRORS: {
      return {
        ...state,
        errors: action.newValue,
      };
    }
    default:
      return state;
  }
};

export default resetPasswordReducer;
