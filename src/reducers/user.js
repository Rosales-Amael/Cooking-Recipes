import {
  USER_CHANGE_DELETE_STATUS,
  USER_CHANGE_DELETE_TOAST_MESSAGE,
  USER_CHANGE_EDIT_STATUS,
  USER_CHANGE_EDIT_TOAST_MESSAGE,
  USER_CHANGE_EMAIL,
  USER_CHANGE_NAME,
  USER_SET_USER,
} from '../actions/user';

const user = JSON.parse(localStorage.getItem('USER_DATA'));

const initialState = {
  user: [],
  deleteToastMessage: '',
  deleteStatus: 0,
  name: user ? user.name : '',
  email: user ? user.email : '',
  editToastMessage: '',
  editStatus: 0,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_SET_USER: {
      return {
        ...state,
        user: action.newValue,
      };
    }

    case USER_CHANGE_DELETE_TOAST_MESSAGE: {
      return {
        ...state,
        deleteToastMessage: action.newValue,
      };
    }

    case USER_CHANGE_DELETE_STATUS: {
      return {
        ...state,
        deleteStatus: action.newValue,
      };
    }

    case USER_CHANGE_NAME: {
      return {
        ...state,
        name: action.newValue,
      };
    }

    case USER_CHANGE_EMAIL: {
      return {
        ...state,
        email: action.newValue,
      };
    }

    case USER_CHANGE_EDIT_TOAST_MESSAGE: {
      return {
        ...state,
        editToastMessage: action.newValue,
      };
    }

    case USER_CHANGE_EDIT_STATUS: {
      return {
        ...state,
        editStatus: action.newValue,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
