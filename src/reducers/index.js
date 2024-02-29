import { combineReducers } from 'redux';

import addRecipeReducer from './addRecipe';
import loginReducer from './login';
import registerReducer from './register';
import userReducer from './user';
import avatarReducer from './avatar';

const rootReducer = combineReducers({
  addRecipe: addRecipeReducer,
  login: loginReducer,
  register: registerReducer,
  user: userReducer,
  avatar: avatarReducer,
});

export default rootReducer;
