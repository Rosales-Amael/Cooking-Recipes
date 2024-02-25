import {
  CHANGE_REGISTER_EMAIL,
  CHANGE_REGISTER_FIRSTNAME,
  CHANGE_REGISTER_LASTNAME,
  CHANGE_REGISTER_PASSWORD,
} from '../actions/register';

const initialState = {
  email: '',
  firstname: '',
  lastname: '',
  password: '',
};

const registerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_REGISTER_EMAIL: {
      return {
        ...state,
        email: action.newValue,
      };
    }

    case CHANGE_REGISTER_FIRSTNAME: {
      return {
        ...state,
        firstname: action.newValue,
      };
    }

    case CHANGE_REGISTER_LASTNAME: {
      return {
        ...state,
        lastname: action.newValue,
      };
    }

    case CHANGE_REGISTER_PASSWORD: {
      return {
        ...state,
        password: action.newValue,
      };
    }
    default:
      return state;
  }
};

export default registerReducer;
