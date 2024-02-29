import { USER_SET_USER } from '../actions/user';

const initialState = {
  user: [],
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_SET_USER: {
      return {
        ...state,
        user: action.newValue,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
