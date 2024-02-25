import { combineReducers } from 'redux';

import addRecipeReducer from './addRecipe';
import loginReducer from './login';
import registerReducer from './register';

const rootReducer = combineReducers({
  addRecipe: addRecipeReducer,
  login: loginReducer,
  register: registerReducer,
});

export default rootReducer;
