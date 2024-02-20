import { combineReducers } from 'redux';

import addRecipeReducer from './addRecipe';

const rootReducer = combineReducers({
  addRecipe: addRecipeReducer,
});

export default rootReducer;
