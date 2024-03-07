import {
  CHANGE_REGISTER_FIRSTNAME,
  CHANGE_REGISTER_EMAIL,
  CHANGE_REGISTER_PASSWORD,
  CHANGE_REGISTER_CONFIRM_PASSWORD,
  REGISTER_CHANGE_TOAST_MESSAGE,
  REGISTER_CHANGE_STATUS,
  REGISTER_CHANGE_ERRORS,
} from '../actions/register';

const initialState = {
  firstname: '',
  email: '',
  password: '',
  confirmPassword: '',
  isAccountCreated: false,
  errors: [],
  status: 0,
  toastMessage: '',
};

const registerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_REGISTER_FIRSTNAME: {
      return {
        ...state,
        firstname: action.newValue,
      };
    }
    case CHANGE_REGISTER_EMAIL: {
      return {
        ...state,
        email: action.newValue,
      };
    }

    case CHANGE_REGISTER_PASSWORD: {
      return {
        ...state,
        password: action.newValue,
      };
    }

    case CHANGE_REGISTER_CONFIRM_PASSWORD: {
      return {
        ...state,
        confirmPassword: action.newValue,
      };
    }

    case REGISTER_CHANGE_ERRORS: {
      return {
        ...state,
        errors: action.newValue,
      };
    }

    case REGISTER_CHANGE_TOAST_MESSAGE: {
      return {
        ...state,
        toastMessage: action.newValue,
      };
    }

    case REGISTER_CHANGE_STATUS: {
      return {
        ...state,
        status: action.newValue,
      };
    }

    default:
      return state;
  }
};

export default registerReducer;
