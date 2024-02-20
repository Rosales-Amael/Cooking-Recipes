export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const CHANGE_DIFFICULTY = 'CHANGE_DIFFICULTY';
export const CHANGE_DURATION = 'CHANGE_DURATION';
export const SAVE_INGREDIENT = 'SAVE_INGREDIENT';
export const SAVE_STEP = 'SAVE_STEP';
export const SAVE_UTENSIL = 'SAVE_UTENSIL';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const DELETE_STEP = 'DELETE_STEP';
export const DELETE_UTENSIL = 'DELETE_UTENSIL';

export const changeTitle = (newValue) => ({
  type: CHANGE_TITLE,
  newValue,
});

export const changeCategory = (newValue) => ({
  type: CHANGE_CATEGORY,
  newValue,
});

export const changeDifficulty = (newValue) => ({
  type: CHANGE_DIFFICULTY,
  newValue,
});

export const changeDuration = (newValue) => ({
  type: CHANGE_DURATION,
  newValue,
});

export const saveIngredient = (newObject) => ({
  type: SAVE_INGREDIENT,
  newObject,
});

export const saveStep = (newObject) => ({
  type: SAVE_STEP,
  newObject,
});

export const saveUtensil = (newObject) => ({
  type: SAVE_UTENSIL,
  newObject,
});

export const deleteIngredient = (id) => ({
  type: DELETE_INGREDIENT,
  id,
});

export const deleteStep = (id) => ({
  type: DELETE_STEP,
  id,
});

export const deleteUtensil = (id) => ({
  type: DELETE_UTENSIL,
  id,
});
