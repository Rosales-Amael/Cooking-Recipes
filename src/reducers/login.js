import { CHANGE_LOGIN_EMAIL, CHANGE_LOGIN_PASSWORD } from '../actions/login';

const initialState = {
  email: '',
  password: '',
};

const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_EMAIL: {
      return {
        ...state,
        email: action.newValue,
      };
    }

    case CHANGE_LOGIN_PASSWORD: {
      return {
        ...state,
        password: action.newValue,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
