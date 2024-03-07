import { SET_LOADER } from '../actions/loader';

const initialState = {
  isLoading: false,
};

const loaderReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOADER: {
      return {
        ...state,
        isLoading: action.newValue,
      };
    }
    default:
      return state;
  }
};

export default loaderReducer;
