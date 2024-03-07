import { combineReducers } from 'redux';

import addRecipeReducer from './addRecipe';
import loginReducer from './login';
import registerReducer from './register';
import userReducer from './user';
import avatarReducer from './avatar';
import forgotPasswordReducer from './forgotPassword';
import loaderReducer from './loader';
import resetPasswordReducer from './resetPassword';

const rootReducer = combineReducers({
  addRecipe: addRecipeReducer,
  login: loginReducer,
  register: registerReducer,
  user: userReducer,
  avatar: avatarReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  loader: loaderReducer,
});

export default rootReducer;
